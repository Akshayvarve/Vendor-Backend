var conn = require('../../config/db.config');

var State = function(state){
    this.CountryId = state.CountryId;
    this.State = state.State;
    this.StateCode = state.StateCode;
    this.CreatedDate = new Date();
    this.CompaniesId = state.CompaniesId;
    this.CreatedBy = state.CreatedBy;
    this.IsActive = state.IsActive ? state.IsActive : 1;
}

//get all States
State.getAllStates  = () =>{
    return new Promise((resolve,reject) => {
        conn.query('SELECT * FROM tblstate WHERE IsActive=1  ', (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}

//get State by id
State.getSingleState = (id) => {
    return new Promise((resolve,reject) => {
        conn.query('SELECT * FROM tblstate WHERE StateId=?',id,(err,res) => {
            if(err){
                return reject(err)
            }else{
                return resolve(res)
            }
        })
    })
}


State.createState  = (stateReqData) =>{
    return new Promise((resolve,reject)=>{
        conn.query('INSERT INTO tblstate SET ?', stateReqData, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    }) 
} 


//update State

State.updateState = (id,stateReqData) => {
    return new Promise((resolve,reject) => {
        conn.query("UPDATE tblstate SET State=?,StateCode=?,CountryId=?,IsActive=? WHERE StateId=?",
        [stateReqData.State,stateReqData.StateCode,stateReqData.CountryId,stateReqData.IsActive,id],
        (err,res) => {
            if(err){
                return reject(err)
            }else{
                return resolve(res)
            }

        })
    })
}



State.deleteState= (id) => {
    return new Promise((resolve,reject) => {
        conn.query("UPDATE tblstate SET IsActive=? WHERE StateId=?",
    [0,id],
        (err,res) => {
            if(err){
                return reject(err)
            }else{
                return resolve(res)
            }

        })
    })
}
module.exports = State;