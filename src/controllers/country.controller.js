const CountryModel = require('../models/country.model')

//get all country list
exports.getAllCountries = (req, res) => {
    CountryModel.getAllCountries((err, countries) => {
        if (err)
            res.send(err);
        console.log('countries', countries);
        res.send(countries)
    })
}

//get Country by ID
exports.getSingleCountry = (req, res) => {
    CountryModel.getSingleCountry(req.params.id, (err, country) => {
        if (err)
            res.send(err);
        console.log('Country', country);
        res.send(country)
    })
}

//Create new Country
exports.createCountry = (req, res) => {
    const countryReqData = new CountryModel(req.body);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).lentgh === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });

    } else {
        CountryModel.createCountry(countryReqData, (err, country) => {
            if (err)
                req.send(err);
            res.json({ status: true, message: 'Inserted Succefully', data: country })
        })
    }
}

//Update Country
exports.updateCountry = (req, res) => {
    const conuntryReqData = new CountryModel(req.body);
    console.log('conuntryReqData update', conuntryReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).lentgh === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });

    } else {
        CountryModel.updateCountry(req.params.id, conuntryReqData, (err, country) => {
            if (err)
                req.send(err);
            res.json({ status: true, message: 'Country Updated Succefully' })
        })
    }
}

//Delete Country
exports.deleteCountry = (req, res) => {
    CountryModel.deleteCountry(req.params.id, (err, country) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Country deleted succesfully' });

    })
}

