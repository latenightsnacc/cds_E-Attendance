const express = require('express');
const sessions = require('express-session');
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const app = express();
const oneDay = 1000 * 60 * 60 * 24;
app.use

app( () => {
    console.log('Server running on port 8080')
} )