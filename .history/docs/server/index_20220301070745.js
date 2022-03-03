require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req,res) => {
    res.send({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEB"
    })
})
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})