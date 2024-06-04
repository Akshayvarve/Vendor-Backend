const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = ['https://vendor-frontend-peach.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.json());

// User routes
app.post('/Default/user', (req, res) => {
  // Handle signup
  res.json({ message: 'User signup' });
});

app.post('/Default/user/login', (req, res) => {
  // Handle login
  res.json({ message: 'User login' });
});

// Vendor routes
app.get('/Default/vendor/All', (req, res) => {
  // Handle get all vendors
  res.json({ message: 'Get all vendors' });
});

app.get('/Default/vendor/single/data/:id', (req, res) => {
  // Handle get single vendor
  res.json({ message: `Get single vendor with id ${req.params.id}` });
});

app.get('/Default/vendor/vendorid', (req, res) => {
  // Handle get single vendor id
  res.json({ message: 'Get single vendor id' });
});

app.post('/Default/vendor/add', (req, res) => {
  // Handle create vendor
  res.json({ message: 'Create vendor' });
});

app.put('/Default/vendor/update/:id', (req, res) => {
  // Handle update vendor
  res.json({ message: `Update vendor with id ${req.params.id}` });
});

app.delete('/Default/vendor/delete/:id', (req, res) => {
  // Handle delete vendor
  res.json({ message: `Delete vendor with id ${req.params.id}` });
});

// Vendor Address routes
app.get('/Default/vendorAddress/All', (req, res) => {
  // Handle get all vendor addresses
  res.json({ message: 'Get all vendor addresses' });
});

app.get('/Default/vendorAddress/addressid', (req, res) => {
  // Handle get single vendor address id
  res.json({ message: 'Get single vendor address id' });
});

app.post('/Default/vendorAddress/add', (req, res) => {
  // Handle create vendor address
  res.json({ message: 'Create vendor address' });
});

app.put('/Default/vendorAddress/update/:id', (req, res) => {
  // Handle update vendor address
  res.json({ message: `Update vendor address with id ${req.params.id}` });
});

app.delete('/Default/vendorAddress/delete/:id', (req, res) => {
  // Handle delete vendor address
  res.json({ message: `Delete vendor address with id ${req.params.id}` });
});

app.get('/Default/country/All', (req, res) => {
  // Handle get all countries
  res.json({ message: 'Get all countries' });
});

app.get('/Default/country/single/:id', (req, res) => {
  // Handle get single country
  res.json({ message: `Get single country with id ${req.params.id}` });
});

app.post('/Default/country/add', (req, res) => {
  // Handle create country
  res.json({ message: 'Create country' });
});

app.put('/Default/country/update/:id', (req, res) => {
  // Handle update country
  res.json({ message: `Update country with id ${req.params.id}` });
});

app.delete('/Default/country/delete/:id', (req, res) => {
  // Handle delete country
  res.json({ message: `Delete country with id ${req.params.id}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

