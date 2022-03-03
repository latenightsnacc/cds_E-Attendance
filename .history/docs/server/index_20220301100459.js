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
    db.corpers.create(corper)
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

app.post("/api/auth/signin", (req,res) => {
    db.corpers.findOne({
        where: {
            email: req.body.email
        }
    }).then(corper => {
        if(!corper) {
            return res.status(404).send({message: "Profile not found!"})
        }
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            corper.password
        );
        if(!passwordIsValid) {
            return res.status(401).send({
                message: "Invalid Password!"
            });
        }
        
        
    }).catch(err => {
        res.status(500).send({message: err.message});
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})