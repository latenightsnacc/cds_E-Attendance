require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const db = require("./models/");
const dbConfig = require("./config/db.config");
const app = express();
const PORT = process.env.PORT;
const ONE_HOUR = 24*60*60;

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: ONE_HOUR,
        sameSite: true
    }
}))
app.get("/", (req,res) => {
    res.json({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})
app.post("/api/auth/signup", (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Form fields incomplete!"
        })
        return;
    }
        
    const corper = {
        firstname: req.body.firstname,
        surname: req.body.surname,
        batch: req.body.batch,
        statecode: req.body.statecode,
        cdsGroup: req.body.cdsGroup,
        lga: req.body.lga,
        ppa: req.body.ppa,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        profilePic: req.body.profilePic,
        password: bcrypt.hashSync(req.body.statecode, 8),
        status: req.body.status,
        roles: req.body.roles,
        state: req.body.state 
    }
    Corper.create(corper)
    .then(data =>  {
        console.log("Corper's profile created: "+ data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Error occured while creating profile. "
        });
    })
})
require("./routes/auth.routes")(app);
require("./routes/corper.routes")(app);
require("./routes/coordinator.routes")(app);
require("./routes/attendance.routes")(app);
require("./routes/note.routes")(app);
require("./routes/monthlydues.routes")(app);
require("./routes/projectfee.routes")(app);
require("./routes/eventfee.routes")(app);
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})