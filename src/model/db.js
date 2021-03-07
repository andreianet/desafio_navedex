const mysql = require('mysql');
require('dotenv').config()
const config = require('../infra/connection_mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT_MYSQL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    
});

module.exports = connection;



