const express = require('express')
const router = express.Router();

const countryController = require('../controllers/country.controller');

//Get all Country
router.get('/All', countryController.getAllCountries);
//Get single Country
router.get('/Single/:id', countryController.getSingleCountry);
//Create Country
router.post('/', countryController.createCountry);
//update Country
router.put('/:id', countryController.updateCountry);
//Delete Country
router.delete('/:id', countryController.deleteCountry);

module.exports =  router;