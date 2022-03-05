require("dotenv").config();
const p4ssw0rd = require('p4ssw0rd');
const bcrypt = require("bcryptjs");
const express = require("express");
let session = require("express-session");
const cookieParser = require("cookie-parser");
const dbConfig = require("./config/db.config");
const mysql = require("mysql2");
const cors = require("cors");
const db = require("./models/");
let mysqlStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require("./models/");
const app = express();
const PORT = process.env.PORT;
const ONE_DAY = 24*60*60*1000;
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const dbConnect = mysql.createConnection({

    user: dbConfig.USER,
    host: dbConfig.HOST,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// const pool = mysql.createPool(options);
dbConnect.connect(err => {
    if(err) {
        console.log(err)
    } else {
        console.log('Database connected successfully!');
        
    }
})
const sessionStore = new mysqlStore({
    db: sequelize,
    checkExpirationInterval:15*60*1000,
    expiration: ONE_DAY,
    table: "sessions"
});
app.use(session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: ONE_DAY
    }
}))

app.get("/", (req,res) => {
    res.json({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})

sessionStore.sync();

app.post("/api/auth/signup", (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Form fields incomplete!"
        })
        return;
    }
    const salt = bcrypt.genSaltSync(10);
    
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
        password: bcrypt.hashSync(req.body.statecode, salt),
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
let corper;
app.post("/api/auth/signin", async (req,res) => {

    const email = req.body.email;
    const password = req.body.password;
    //  //

    dbConnect.query("SELECT * FROM corpers WHERE email = ?", email, (err,result) =>{
        if(err){
            console.log(err);
        } else {
            console.log(result[0].password);
            corper = result[0];
        }
    })
    console.log(corper);
    const passwordIsValid = bcrypt.compareSync(password, corper.password);
    // if(email.length > 0 && password.length > 0){
    //     corper = dbConnect.query(`SELECT * FROM corpers WHERE email = ? AND password = ? `,[email, passwordIsValid], (err,result) => {
    //         if(err) {
    //             console.log(err)
    //         } else {
    //             res.send(result);
    //             console.log(result);
    //         }
    //     });
        
        
    //     // if(corper){
    //     //     
    //     //     console.log(passwordIsValid);
    //     //     console.log(corper.password);
    //     //     if(passwordIsValid === corper.password) {
    //     //         session=req.session;
    //     //         session.userId=corper.id;
    //     //         res.send(`/api/dashboard/member/${session.userId}`);
    //     //         console.log("Logged in");
                
    //     //     } else {
    //     //         return res.status(401).send({
    //     //             message: "Invalid Password!"
    //     //         });  
    //     //     }
    
    //     // } else {
    //     //     res.sendStatus(400).send('Profile not found!')
    //     // }
    // }
    // console.log(corper);
});

app.get('/api/auth/signout',(req,res) => {
    req.session.destroy();
    res.send('/api/auth/signin');
});

console.log('corperSession');

app.get(`/api/dashboard/member/:id`, (req, res) => {
    const id = req.params.id;
    session=req.session;
    console.log(`Corper ID: ${id}`);
    dbConnect.query(`SELECT * FROM corpers WHERE id = ? `,id, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
            console.log(result);
        }
    });
    
})


app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})