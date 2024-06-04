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
  res.json({ message: 'User signup' });
});

app.post('/Default/user/login', (req, res) => {
  res.json({ message: 'User login' });
});

// Vendor routes
app.get('/Default/vendor/All', (req, res) => {
  res.json({ message: 'Get all vendors' });
});

app.get('/Default/vendor/single/data/:id', (req, res) => {
  res.json({ message: `Get single vendor with id ${req.params.id}` });
});

app.get('/Default/vendor/vendorid', (req, res) => {
  res.json({ message: 'Get vendor ID' });
});

app.post('/Default/vendor/add', (req, res) => {
  res.json({ message: 'Create vendor' });
});

app.put('/Default/vendor/update/:id', (req, res) => {
  res.json({ message: `Update vendor with id ${req.params.id}` });
});

app.delete('/Default/vendor/delete/:id', (req, res) => {
  res.json({ message: `Delete vendor with id ${req.params.id}` });
});

// Vendor Address routes
app.get('/Default/vendorAddress/All', (req, res) => {
  res.json({ message: 'Get all vendor addresses' });
});

app.get('/Default/vendorAddress/addressid', (req, res) => {
  res.json({ message: 'Get single vendor address id' });
});

app.post('/Default/vendorAddress/add', (req, res) => {
  res.json({ message: 'Create vendor address' });
});

app.put('/Default/vendorAddress/update/:id', (req, res) => {
  res.json({ message: `Update vendor address with id ${req.params.id}` });
});

app.delete('/Default/vendorAddress/delete/:id', (req, res) => {
  res.json({ message: `Delete vendor address with id ${req.params.id}` });
});

// Country routes
app.get('/Default/country/All', (req, res) => {
  res.json({ message: 'Get all countries' });
});

app.get('/Default/country/single/:id', (req, res) => {
  res.json({ message: `Get single country with id ${req.params.id}` });
});

app.post('/Default/country/add', (req, res) => {
  res.json({ message: 'Create country' });
});

app.put('/Default/country/update/:id', (req, res) => {
  res.json({ message: `Update country with id ${req.params.id}` });
});

app.delete('/Default/country/delete/:id', (req, res) => {
  res.json({ message: `Delete country with id ${req.params.id}` });
});

// State routes
app.get('/Default/state/All', (req, res) => {
  res.json({ message: 'Get all states' });
});

app.get('/Default/state/single/:id', (req, res) => {
  res.json({ message: `Get single state with id ${req.params.id}` });
});

app.post('/Default/state/add', (req, res) => {
  res.json({ message: 'Create state' });
});

app.put('/Default/state/update/:id', (req, res) => {
  res.json({ message: `Update state with id ${req.params.id}` });
});

app.delete('/Default/state/delete/:id', (req, res) => {
  res.json({ message: `Delete state with id ${req.params.id}` });
});

// City routes
app.get('/Default/city/All', (req, res) => {
  res.json({ message: 'Get all cities' });
});

app.get('/Default/city/single/:id', (req, res) => {
  res.json({ message: `Get single city with id ${req.params.id}` });
});

app.post('/Default/city/add', (req, res) => {
  res.json({ message: 'Create city' });
});

app.put('/Default/city/update/:id', (req, res) => {
  res.json({ message: `Update city with id ${req.params.id}` });
});

app.delete('/Default/city/delete/:id', (req, res) => {
  res.json({ message: `Delete city with id ${req.params.id}` });
});

// Bank routes
app.get('/Default/bank/All', (req, res) => {
  res.json({ message: 'Get all banks' });
});

app.post('/Default/bank/add', (req, res) => {
  res.json({ message: 'Create bank' });
});

app.put('/Default/bank/update/:id', (req, res) => {
  res.json({ message: `Update bank with id ${req.params.id}` });
});

app.delete('/Default/bank/delete/:id', (req, res) => {
  res.json({ message: `Delete bank with id ${req.params.id}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
