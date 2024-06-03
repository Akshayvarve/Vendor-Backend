const mysql = require('mysql')

//create connection
const conn = mysql.createConnection({
    host: 'ba5iyqohaykukda0e7yc-mysql.services.clever-cloud.com',
    user: 'uvopgc4hnxkltbsd',
    password: 'uvopgc4hnxkltbsd',
    database: 'ba5iyqohaykukda0e7yc'
});
conn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected succesfully');
})

module.exports = conn;