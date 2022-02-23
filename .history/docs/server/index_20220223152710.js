const express = require('express');
const sessions = require('express-session');
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const PORT = 4000;
const app = express();

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
app( () => {
    console.log('Server running on port 8080')
} )