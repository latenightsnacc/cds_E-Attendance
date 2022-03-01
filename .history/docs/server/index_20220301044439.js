const express = require('express');
const sessions = require('express-session');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = 4000;
const app = express();
const db = require("./models");

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: '',
    saveUninitialized:true,
    cookie: {maxAge: oneDay},
    resave: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(express.static(__dirname));

app.use(cookieParser());

db.sequelize.sync(); 

let session;

app.get('/', (req,res) => {
    session=req.session;
    res.sendFile(path)
})

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));