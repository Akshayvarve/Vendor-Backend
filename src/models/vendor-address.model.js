var conn = require('../../config/db.config');

var vendoraddress = function (vendoradd) {
    this.dealer_id = vendoradd.dealer_id;
    this.address_line_1 = vendoradd.address_line_1;
    this.address_line_2 = vendoradd.address_line_2;
    this.country = vendoradd.country;
    this.state = vendoradd.state;
    this.city = vendoradd.city;
    this.pincode = vendoradd.pincode;
    this.address_type = vendoradd.address_type;
    this.IsActive = vendoradd.IsActive ? vendoradd.IsActive : 1;
}


vendoraddress.getAllAddress = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM dealer_address WHERE IsActive=1;', (err, res) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve(res)
            }
        })
    })
}

vendoraddress.getSingleAddressId = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT id FROM dealer_address WHERE IsActive=1 ORDER BY id DESC LIMIT 1;', (err, res) => {
            if (err) {
                return reject(err)
            }
            else {
                return resolve(res)
            }
        })
    })
}


vendoraddress.createvendoraddress = (userReqData) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO dealer_address SET ?', userReqData, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        })
    })
}

vendoraddress.Updatevendoradd = (id, itemReqData, result) => {
    conn.query("UPDATE dealer_address SET address_line_1 = ?, address_line_2 = ?, country = ?, state = ?, city = ?, pincode = ?, address_type = ? WHERE id = ?;",
        [itemReqData.address_line_1, itemReqData.address_line_2, itemReqData.country, itemReqData.state, itemReqData.city, itemReqData.pincode, itemReqData.address_type, id],
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





module.exports = vendoraddress;