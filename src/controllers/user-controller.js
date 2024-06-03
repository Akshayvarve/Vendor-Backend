const UserModel = require('../models/user-model')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')




exports.createUser = async (req, res) => {
    try {
        const userReqData = new UserModel(req.body);
       
        const salt = genSaltSync(10);
   
        userReqData.Password = hashSync(userReqData.Password, salt);
       
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

             await UserModel.createUser(userReqData)
            return res.json({ status: true, message: "User Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating user" })
    }
}

exports.userLogin = (req, res) => {
    // try{
    const body = req.body;
    UserModel.userLogin(body.Email, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results || results.lentgh === 0) {
            return res.json({
                success: 0,
                data: "Invalid Usename"
            });
        }
        const result = compareSync(body.Password, results.Password);
        if (result) {
            results.Password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {
                expiresIn: "24h"
            });
            return res.json({
                success: 1,
                message: "Login succesfull",
                user: results,
                token: jsontoken
            });
        } else {
            return res.json({
                success: 0,
                data: "Incorrect password"
            })
        }
    })


}