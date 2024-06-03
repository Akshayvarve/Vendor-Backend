var conn = require('../../config/db.config');

var Bank = function (bank) {
    this.dealer_id = bank.dealer_id;
    this.bank_ifsc_code = bank.bank_ifsc_code;
    this.bank_name = bank.bank_name;
    this.branch_name = bank.branch_name;
    this.account_no = bank.account_no;
    this.account_holder_name = bank.account_holder_name;
    this.IsActive = bank.IsActive ? bank.IsActive : 1;
}

Bank.getAllBank = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM dealer_bank WHERE IsActive=1;', (err, res) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve(res)
            }
        })
    })
}



Bank.createBank = (userReqData) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO dealer_bank SET ?', userReqData, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        })
    })
}

Bank.UpdateBank = (id, itemReqData, result) => {
    conn.query("UPDATE dealer_bank SET bank_ifsc_code = ?, bank_name = ?, branch_name = ?, account_no = ?, account_holder_name = ? WHERE id = ?;",
        [itemReqData.bank_ifsc_code, itemReqData.bank_name, itemReqData.branch_name, itemReqData.account_no, itemReqData.account_holder_name, id],
        (err, res) => {
            if (err) {
                console.log('error while updating record');
                result(null, err);
            } else {
                console.log('vendoradd updated succesfully');
                result(null, res);
            }
        });
}

Bank.deleteBank = (id) => {
    return new Promise((resolve,reject) => {
        conn.query("UPDATE  dealer_bank SET IsActive=? WHERE dealer_id=?",
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


module.exports = Bank;