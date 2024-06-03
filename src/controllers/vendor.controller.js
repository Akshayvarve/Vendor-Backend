const Vendormodel = require('../models/vendor.model')


exports.getAllvendor = async (req, res) => {
    try {
        const Vendor = await Vendormodel.getAllvendor();
        console.log(Vendor)
        return res.send(Vendor)
    } catch (error) {
        res.json({ status: false, message: 'Error while fetching Vendor' })
    }

}

exports.getSinglevendor = async (req, res) => {
    try {
        const Vendor = await Vendormodel.getSinglevendor(req.params.id);
        return res.send(Vendor)
    } catch (error) {
        res.json({ status: false, message: 'Error while fetching Vendor' })
    }
}


exports.Updatevendor = async (req, res) => {
    try {
        const ExpTypeData = new  Vendormodel(req.body);
        // console.log(typeof req.body)
        console.log('employee update', ExpTypeData);
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            // if (req.body.constructor === Object && Object.keys(req.body).lentgh===0) {
            res.json({ success: false, message: 'Please fill all fields' });
            //  res.send(400).send({ success: false, message: 'Please fill all fields' });
        }else{
            await Vendormodel.Updatevendor(req.params.id,ExpTypeData);
            return res.json({ status: true, message: ' BOM Updated Succefully', data:  ExpTypeData })
        }
        
    }
    catch (e) {
        return res.json({ status: false, data: "Something went wrong" })
    }
}

exports.createvendor = async (req, res) => {
    try {
        const userReqData = new Vendormodel(req.body);


        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

            await Vendormodel.createvendor(userReqData)
            return res.json({ status: true, message: "vendor Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating vendor" })
    }

}

exports.getSingleVendorid = async (req, res) => {
    try {
        const allUsers = await Vendormodel.getSingleVendorid();
        return res.send(allUsers)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching Student" })
    }
}