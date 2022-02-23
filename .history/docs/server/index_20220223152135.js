const express = require('express');
const cors = require('cors');
const app = express;
const mysql = require('mysql');
const cookieParser = require('cookie-parser');


app( () => {
    console.log('Server running on port 8080')
} )