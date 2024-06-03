const express = require('express')
const router = express.Router();

const vendoraddresscontroller = require('../controllers/vendor-address.controller');

router.get('/All', vendoraddresscontroller.getAllAddress);

router.get('/addressid', vendoraddresscontroller.getSingleAddressId);

router.post('/add', vendoraddresscontroller.createvendoraddress);

router.put('/update/:id', vendoraddresscontroller.Updatevendoradd);




module.exports = router