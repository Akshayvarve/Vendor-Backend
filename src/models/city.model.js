var conn = require('../../config/db.config');

var City = function (city) {
    this.City = city.City;
    this.StateId = city.StateId;
    this.CreatedDate = new Date();
    this.CompaniesId =  city.CompaniesId;
    this.CreatedBy = city.CreatedBy;
    this.IsActive = city.IsActive ? city.IsActive : 1;
}

//get all Cities
City.getAllCities = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT CityId,City,StateId FROM tblcity WHERE IsActive=1', (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        })
    })
}
//get city by id
City.getSingleCity = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT CityId,City,StateId FROM tblcity WHERE IsActive=1 AND CityId=?', id, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        })
    })
}
//get city by StateId
City.getCityByStateId = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT c.CityId,c.City FROM tblstate AS s LEFT JOIN tblcity AS c ON s.StateCode= c.StateId WHERE s.StateId=?', id, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        })
    })

}

//create city
City.createCity = (cityReqData) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO tblcity SET ?', cityReqData, (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(err);
            }
        })
    })
    
}
//update City
City.updateCity = (id, cityReqData) => {
    return new Promise((resolve, reject) => {
        conn.query("UPDATE tblcity SET City=?, StateId=?,IsActive=? WHERE CityId=?",
        [cityReqData.City, cityReqData.StateId, cityReqData.IsActive, id],
        (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        });
    });
        
}
//Delete City
City.deleteCity = (id) => {
    return new Promise((resolve, reject) => {
        conn.query("UPDATE tblcity SET IsActive=? WHERE CityId=?",
        [0, id],
        (err, res) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(res);
            }
        });
    })
    
}

module.exports = City;