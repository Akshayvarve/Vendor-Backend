const express = require('express')
const router = express.Router();

const vendorcontroller = require('../controllers/vendor.controller');

router.get('/All', vendorcontroller.getAllvendor);

router.get('/single/data/:id', vendorcontroller.getSinglevendor);

router.put('/update/:id', vendorcontroller.Updatevendor);

router.post('/add', vendorcontroller.createvendor);

router.get('/vendorid', vendorcontroller.getSingleVendorid);


module.exports = router