const mysql = require('mysql')

//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'vendor'
    
    // database:'billsoft_alnoorschool'
    // host: 'nodejshosting1.hostingraja.org',
    // user: 'billsof1_instasol',
    // password: 'Pass_123#@!',
    // database: 'billsof1_instasol'
});
conn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected succesfully');
})

module.exports = conn;