const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fileExtension = require('file-extension');
const path = require("path");
const session = require('express-session');
require('dotenv').config();
const cors = require('cors');

const app = express();

// Session configuration
app.use(session({
    secret: 'its my secret',
    cookie: { maxAge: 600000 }, // Increased maxAge to 10 minutes (600000 ms)
    resave: false,
    rolling: false,
    saveUninitialized: true
}));

// CORS configuration
app.use(cors({
    origin: 'https://vendor-frontend-peach.vercel.app', // Allow your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Allow cookies to be sent
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

// Handle preflight requests
app.options('*', cors());

// Debugging middleware to log incoming requests and outgoing responses
app.use((req, res, next) => {
    console.log('Incoming Request:', req.method, req.url);
    res.on('finish', () => {
        console.log('Outgoing Response:', res.statusCode, res.statusMessage);
    });
    next();
});

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.get('/', (req, res) => {
    res.send("hello World ");
});

const vendor = require('./src/routes/vendor.route');
app.use('/api/Default/vendor', vendor);

const vendorAddress = require('./src/routes/vendor-address.route');
app.use('/api/Default/vendorAddress', vendorAddress);

const country = require('./src/routes/country.route');
app.use('/api/Default/country', country);

const state = require('./src/routes/state.route');
app.use('/api/Default/state', state);

const city = require('./src/routes/city.route');
app.use('/api/Default/city', city);

const bank = require('./src/routes/bank.route');
app.use('/api/Default/bank', bank);

const user = require('./src/routes/user-route');
app.use('/api/Default/user', user);

app.listen(port, () => {
    console.log(`Express Server Is Running At Port ${port}`);
});
