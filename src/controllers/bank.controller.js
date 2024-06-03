const BankModel = require('../models/bank.model')


exports.getAllBank = async (req, res) => {
    try {
        const Bank = await BankModel.getAllBank();
        console.log(Bank)
        return res.send(Bank)
    } catch (error) {
        res.json({ status: false, message: 'Error while fetching Bank' })
    }
}


exports.createBank = async (req, res) => {
    try {
        const userReqData = new BankModel(req.body);


        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

            await BankModel.createBank(userReqData)
            return res.json({ status: true, message: "Bank Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating Bank" })
    }

}



exports.UpdateBank = (req, res) => {
    const itemReqData = new BankModel(req.body);
    console.log('itemReqData update', itemReqData);
    //check null
    if (req.body.constructor === Object && Object.keys(req.body).lentgh === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });

    } else {
        BankModel.UpdateBank(req.params.id, itemReqData, (err, item) => {
            if (err)
                req.send(err);
            res.json({ status: true, message: 'Bank Updated Succefully' })
        })
    }
}


exports.deleteBank = async (req, res) => {
    try {
        await BankModel.deleteBank(req.params.id);
        res.json({ success: true, message: 'Bank deleted succesfully' });
    } catch (error) {
        return res.json({ status: false, message: 'Error while deleting Bank' })
    }
}
