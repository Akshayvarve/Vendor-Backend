const express = require('express')
const router = express.Router();

const cityController = require('../controllers/city.controller');

//Get all Cities
router.get('/All', cityController.getAllCities);
//Get single City
router.get('/Single/:id', cityController.getSingleCity);

//Get City By StateId
router.get('/state_id/:id', cityController.getCityByState);

//Create City
router.post('/', cityController.createCity);
//update City
router.put('/:id', cityController.updateCity);
//update City
router.delete('/:id', cityController.deleteCity);

module.exports =  router;