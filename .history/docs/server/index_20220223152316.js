const express = require('express');
const
const cors = require('cors');
const app = express;
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

const oneDay = 1000 * 60 * 60 * 24;
app.use

app( () => {
    console.log('Server running on port 8080')
} )