const CityModel = require('../models/city.model')

//get all city list
exports.getAllCities = async (req, res) => {
    try {
        const cities = await CityModel.getAllCities();
        return res.send(cities)
    } catch (error) {
        return res.json({ status: false, message: 'Error while fetching Cities' })

    }
}
//get city by ID
exports.getSingleCity = async (req, res) => {
    try {
        const city = await CityModel.getSingleCity(req.params.id);
        return res.send(city);
    } catch (error) {
        return res.json({ status: false, message: 'Error while fetching City' })
    }
}
//get city by StateId
exports.getCityByState = async (req, res) => {
    try {
        const cityState = await CityModel.getCityByStateId(req.params.id);
        return res.send(cityState);
    } catch (error) {
        return res.json({ status: false, message: 'Error while fetching City by State' })
    }
}



//Create new city
exports.createCity = async (req, res) => {
    try {
        const cityReqData = new CityModel(req.body);
        //check null
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.json({ success: false, message: 'Please fill all fields' });

        } else {
            await CityModel.createCity(cityReqData);
            res.json({ status: true, message: 'Inserted Succefully' });
        }
    } catch (error) {
        return res.json({ status: false, message: 'Error while adding City' })
    }
}
//Update city
exports.updateCity = async (req, res) => {
    try {
        const cityReqData = new CityModel(req.body);
        //check null
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.json({ success: false, message: 'Please fill all fields' });
        } else {
            await CityModel.updateCity(req.params.id, cityReqData);
            return res.json({ status: true, message: 'City Updated Succefully' })
        }
    } catch (error) {
        return res.json({ status: false, message: 'Error while updating City' })
    }
}

//Delete City
exports.deleteCity = async (req, res) => {
    try {
        await CityModel.deleteCity(req.params.id);
        res.json({ success: true, message: 'City deleted succesfully' });
    } catch (error) {
        return res.json({ status: false, message: 'Error while deleting City' })

    }
}

