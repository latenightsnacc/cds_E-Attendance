require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const PORT = process.env.PORT;

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})