var conn = require('../../config/db.config');

var vendor = function (vendor) {
    this.login_access = vendor.login_access;
    this.name = vendor.name;
    this.company_name = vendor.company_name;
    this.mobile_no = vendor.mobile_no;
    this.date_of_birth = vendor.date_of_birth
    this.anniversary_date = vendor.anniversary_date
    this.telephone_no = vendor.telephone_no;
    this.whatsapp_no = vendor.whatsapp_no;
    this.remark = vendor.remark;
    this.gst_type = vendor.gst_type;
    this.gstin = vendor.gstin;
    this.pan_no = vendor.pan_no;
    this.apply_tds = vendor.apply_tds;
    this.credit_limit = vendor.credit_limit;
    this.opening_balance = vendor.opening_balance;
    this.opening_balance_type = vendor.opening_balance_type;
    this.supplier_type = vendor.supplier_type;
    this.email = vendor.email;
    this.IsActive = vendor.IsActive ? vendor.IsActive : 1;
}

vendor.getAllvendor = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT d.dealer_id, d.name, d.company_name, d.mobile_no, da.address_line_1, da.address_line_2, da.country, da.state, da.city, da.pincode, da.address_type FROM dealer d LEFT JOIN dealer_address da ON d.dealer_id = da.dealer_id WHERE d.IsActive = 1 ORDER BY d.dealer_id ASC;', (err, res) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve(res)
            }
        })
    })
}


vendor.getSinglevendor = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT d.dealer_id,d.login_access,d.name,d.company_name,d.mobile_no,d.telephone_no,d.whatsapp_no,d.remark,d.date_of_birth, d.anniversary_date,d.gst_type,d.gstin,d.pan_no,d.apply_tds,d.credit_limit,d.opening_balance,d.opening_balance_type, d.supplier_type,d.email,d.IsActive, da.id, da.address_line_1, da.address_line_2, da.country, da.state, da.city, da.pincode, da.address_type FROM dealer AS d LEFT JOIN dealer_address AS da ON d.dealer_id = da.dealer_id WHERE d.dealer_id=? AND d.IsActive=1;',id, (err, res) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve(res)
            }
        })
    })
}




vendor.Updatevendor = (id,bomData) => {
    return new Promise((resolve,reject) => {
        conn.query("UPDATE  tblbom SET  login_access=?, name=?, company_name=?, mobile_no=?, telephone_no=?, whatsapp_no=?, remark=?, date_of_birth=?,anniversary_date=?, gst_type=?, gstin=?, pan_no=?, apply_tds=?, credit_limit=?, opening_balance=?, opening_balance_type=?,supplier_type=?, email=? WHERE dealer_id=?",
        [bomData.login_access,bomData.name,bomData.company_name,bomData.mobile_no,bomData.telephone_no,bomData.whatsapp_no,bomData.remark,bomData.date_of_birth,
            bomData.anniversary_date,bomData.gst_type,bomData.gstin,bomData.pan_no,bomData.apply_tds,bomData.credit_limit,bomData.opening_balance,bomData.opening_balance_type,
            bomData.supplier_type,bomData.email, id],
        (err,res) => {
            if(err){
                return reject(err)
            }else{
                return resolve(res)
            }
        })
    })
}

vendor.createvendor = (userReqData) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO dealer SET ?', userReqData, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        })
     })
}


vendor.getSingleVendorid = () =>{
    return new Promise((resolve,reject) => {
        conn.query('SELECT dealer_id FROM dealer WHERE  IsActive=1 ORDER BY dealer_id DESC LIMIT 1;', (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}

module.exports = vendor;