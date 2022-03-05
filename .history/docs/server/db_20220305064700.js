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

db.insertCorper = (firstname, surname, batch, statecode, cdsGroup,lga,ppa,email,phoneNo, password,status,roles,state) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO corper (firstname, surname, batch, statecode, cdsGroup, lga, ppa, email, phoneNo, profilePic, password, status, roles, state) VALUES ()', [], )
    })
}

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

