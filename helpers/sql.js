// get the client
const mysql = require('mysql2');
const path = require('path')
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
//dotenv.config();

// create the connection to database
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password' || "",
    database: 'company',
});

module.exports = sql;