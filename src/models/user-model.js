const { reject } = require('bcrypt/promises');
var conn = require('../../config/db.config');


var User = function(user){
    this.Name = user.Name;
    this.Email = user.Email;
    this.Password = user.Password;
    this.confirmPassword = user.confirmPassword;
    this.IsActive = user.IsActive ? user.IsActive : 1;
}


User.createUser = (userReqData) =>{
    return new Promise((resolve,reject)=>{
        conn.query('INSERT INTO tbluser SET ?', userReqData, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

User.userLogin = (Email,res) => {
    conn.query('select * from tbluser WHERE Email=? AND IsActive=1',[Email],
    (error,results,fields)=>{
        if(error){
            return res(error)
        }    
        return res(null,results[0])
    })
}

module.exports = User;