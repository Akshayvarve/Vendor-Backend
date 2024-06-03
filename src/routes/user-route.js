const express = require('express')
const router = express.Router()

const userController = require('../controllers/user-controller')

let {checkToken} = require('../../auth/token_validation')


router.post('/', userController.createUser)
router.post('/login', userController.userLogin)


module.exports = router