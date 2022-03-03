require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT;


app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})