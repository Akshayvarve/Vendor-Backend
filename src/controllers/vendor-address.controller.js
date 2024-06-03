const Vendoraddress = require('../models/vendor-address.model')


exports.getAllAddress = async (req, res) => {
    try {
        const commodity = await Vendoraddress.getAllAddress();
        console.log(commodity)
        return res.send(commodity)
    } catch (error) {
        res.json({ status: false, message: 'Error while fetching Commodity' })
    }
}

exports.getSingleAddressId = async (req, res) => {
    try {
        const allUsers = await Vendoraddress.getSingleAddressId();
        return res.send(allUsers)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching Student" })
    }
}

exports.createvendoraddress = async (req, res) => {
    try {
        const userReqData = new Vendoraddress(req.body);


        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

            await Vendoraddress.createvendoraddress(userReqData)
            return res.json({ status: true, message: "Vendoraddress Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating Vendoraddress" })
    }

}



exports.Updatevendoradd = (req, res) => {
    const itemReqData = new Vendoraddress(req.body);
    console.log('itemReqData update', itemReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).lentgh === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });

    } else {
        Vendoraddress.Updatevendoradd(req.params.id, itemReqData, (err, item) => {
            if (err)
                req.send(err);
            res.json({ status: true, message: 'Vendoraddress Updated Succefully' })
        })
    }
}

