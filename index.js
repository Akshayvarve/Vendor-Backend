const express = require('express');
const bodyParser = require('body-parser')
const multer = require('multer');
var fileExtension = require('file-extension')
const path = require("path");
const session = require('express-session')

const app = express()


app.use(session({
    secret: 'its my secret',
    cookie: { maxAge: 600 },
    resave: false,
    rolling: false,
    saveUninitialized: true
}))
var cors = require('cors');
app.use(cors())


const port = process.env.PORT || 5000;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send("hello World ")
})

const vendor = require('./src/routes/vendor.route');
app.use('/Default/vendor', vendor)

const vendorAddress = require('./src/routes/vendor-address.route');
app.use('/Default/vendorAddress', vendorAddress)

const country = require('./src/routes/country.route');
app.use('/Default/country', country)

const state = require('./src/routes/state.route');
app.use('/Default/state', state)

const city = require('./src/routes/city.route');
app.use('/Default/city', city)

const bank = require('./src/routes/bank.route');
app.use('/Default/bank', bank)


const user = require('./src/routes/user-route');
app.use('/Default/user', user)

app.listen(port, () => {
    console.log(`Express Server Is Runnig At Port ${port}`);
})