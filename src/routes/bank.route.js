const express = require('express')
const router = express.Router();

const bankcontroller = require('../controllers/bank.controller');

router.get('/All', bankcontroller.getAllBank);

router.post('/add', bankcontroller.createBank);

router.put('/update/:id', bankcontroller.UpdateBank);

router.delete('/delete/:id', bankcontroller.deleteBank);


module.exports = router