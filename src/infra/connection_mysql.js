//para configuração do DB
require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT_MYSQL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

connection.connect(error => {
    if(error) throw error;
    console.log("Success connected to the database");    
});

module.exports = connection;