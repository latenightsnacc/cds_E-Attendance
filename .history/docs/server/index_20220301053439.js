const express = require('express');
const sessions = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(s)
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const app = express();
const db = require("./models");
dotenv.config();
const PORT = process.env.PORT;
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.ACCESS_TOKEN_SECRET,
    saveUninitialized:true,
    cookie: {maxAge: oneDay},
    resave: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(express.static("src"));

app.use(cookieParser());

db.sequelize.sync(); 

let session;

app.get('/', (req,res) => {
    session=req.session;
    res.sendFile(path.join(__dirname, "src", "Login.js"))
})

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));