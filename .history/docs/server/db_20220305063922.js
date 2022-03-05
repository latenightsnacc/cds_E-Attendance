require('dotenv').config();

const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user:process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
});

let db = {};

db.getCorper = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM corpers WHERE id = ?', [id], (error, corper) => {
           if(error){
               return reject(error);
           } 
           return resolve(corper);
        })
        
    })
}

