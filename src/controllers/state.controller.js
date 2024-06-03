const StateModel = require('../models/state.model')

//get all state list
    exports.getAllStates = async (req,res) => {
        try{
            const getStates =await StateModel.getAllStates();
            console.log(getStates)
            return res.send(getStates)
        } catch (error) {
            res.json({ status: false, message: 'Error while fetching States' })
        }
    }


//get State by ID
exports.getSingleState = async (req, res) => {
    try {
        const getState = await StateModel.getSingleState(req.params.id);
        return res.send(getState)
    } catch (error) {
        res.json({ status: false, message: 'Error while fetching State ' })
    }
}




//Create new State
exports.createState = async (req, res) => {
    try {
        const stateReqData = new StateModel(req.body);
        //check null
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            // if (!req.body) {
            res.json({ success: false, message: 'Please fill all fields' });
        }else{
            await StateModel.createState(stateReqData)
            res.json({ status: true, message: 'create State Added Added Successfully' })
        }   
        
    } catch (error) {
        res.json({ status: false, message: 'Error while create State ' })
    }

}

//Update State
exports.updateState = async (req, res) => {
    try {
        const stateReqData =req.body;
        console.log(typeof req.body)
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            // if (req.body.constructor === Object && Object.keys(req.body).lentgh===0) {
            res.json({ success: false, message: 'Please fill all fields' });
        }else{
            await StateModel.updateState(req.params.id, stateReqData);
            return res.json({ status: true, message: 'State Updated Succefully', data: stateReqData })
        }
        
    }
    catch (e) {
        return res.json({ status: false, data: "Something went wrong" })
    }
}


//Delete State
exports.deleteState = async (req, res) => {
    try {
        const deleteState = await StateModel.deleteState(req.params.id);
        return res.send(deleteState)
    } catch (error) {
        res.json({ status: false, message: 'Error while fetching State deleted  ' })
    }
}
