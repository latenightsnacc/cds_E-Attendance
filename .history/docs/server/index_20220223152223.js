const express = require('express');
const cors = require('cors');
const app = express;
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

const oneDay = 1000 * 60 * 60 * 24;

app( () => {
    console.log('Server running on port 8080')
} )