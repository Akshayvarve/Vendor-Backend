var conn = require('../../config/db.config');

var Country = function (country) {
    this.Country = country.Country;
    this.CountryCode = country.CountryCode;
    this.CreatedDate = new Date();
    this.IsActive = country.IsActive ? country.IsActive : 1;
}


//get all Countries
Country.getAllCountries = (result) => {
    conn.query('SELECT * FROM tblcountry WHERE IsActive=1', (err, res) => {
        if (err) {
            console.log('error while fetching Countries', err);
            result(null, err);
        } else {
            console.log('Cities fetched successfully');
            result(null, res);
        }
    })
}

//get Country by id
Country.getSingleCountry = (id, result) => {
    conn.query('SELECT * FROM tblcountry WHERE CountryId=?', id, (err, res) => {
        if (err) {
            console.log('error while fetching Country  by id', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}
//create Country
Country.createCountry = (countryReqData, result) => {
    conn.query('INSERT INTO tblcountry SET ?', countryReqData, (err, res) => {
        if (err) {
            console.log('error while inserting Country', err);
            result(null, err);
        } else {
            result(null, err);
        }
    })
}

//update Country
Country.updateCountry = (id, countryReqData, result) => {
    conn.query("UPDATE tblcountry SET Country=?, CountryCode=?,IsActive=? WHERE CountryId=?",
        [countryReqData.Country, countryReqData.CountryCode, countryReqData.IsActive, id],
        (err, res) => {
            if (err) {
                console.log('error while updating record');
                result(null, err);
            } else {
                console.log('Country updated succesfully');
                result(null, res);
            }
        });
}

//Delete Country
Country.deleteCountry = (id, result) => {
    conn.query("UPDATE tblcountry SET IsActive=? WHERE CountryId=?",
        [0, id],
        (err, res) => {
            if (err) {
                console.log('error while deleting record');
                result(null, err);
            } else {
                console.log('Country deleting succesfully');
                result(null, res);
            }
        });
}

module.exports = Country;