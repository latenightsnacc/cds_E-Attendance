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
firstname: req.body.firstname,
        surname: req.body.surname,
        batch: req.body.batch,
        statecode: req.body.statecode,
        cdsGroup: req.body.cdsGroup,
        lga: req.body.lga,
        ppa: req.body.ppa,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        profilePic: req.body.profilePic,
        password: bcrypt.hashSync(req.body.statecode, salt),
        status: req.body.status,
        roles: req.body.roles,
        state: req.body.state
db.insertCorper = (firstname, surname, batch, statecode, cdsGroup,lga,ppa,email,p)

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

