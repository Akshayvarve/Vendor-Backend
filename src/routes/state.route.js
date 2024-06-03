const express = require('express')
const router = express.Router();

const stateController = require('../controllers/state.controller');

//Get all States
router.get('/All', stateController.getAllStates);
//Get single States
router.get('/Single/:id', stateController.getSingleState);
//Create State
router.post('/', stateController.createState);
//Update State
router.put('/:id', stateController.updateState);
//Delete State
router.delete('/:id', stateController.deleteState);

module.exports =  router;