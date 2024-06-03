require('dotenv').config();
const mysql = require('mysql');

// Create connection
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conn.connect(function(error){
    if(error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with an error code
    } else {
        console.log('Database Connected successfully');
    }
});

module.exports = conn;
