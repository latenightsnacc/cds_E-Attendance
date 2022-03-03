require("dotenv").config();
const express = require("express");
let session = require("express-session");
const cookieParser = require("cookie-parser");
const dbConfig = require("./config/db.config");
const cors = require("cors");
const db = require("./models/");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = process.env.PORT;
const ONE_DAY = 24*60*60*1000;
app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: ONE_DAY
    }
}))

app.get("/", (req,res) => {
    res.json({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})

db.sequelize.sync();

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



 //set "user_email" cookie, expires in 30 days
// var userEmail=getCookie("user_email")
// let url = window.location.href;
// if(url.indexOf("/api/auth/signin") !== -1 || url.indexOf("/api/auth/signup") !== -1 || url.indexOf("/api/auth/admin/signup") !== -1 || url.indexOf("/api/auth/admin/signin") !== -1 || url.indexOf("/welcome") !== -1){
//     //do nothing
// }else{
//     if(getCookie('user_login') === null){
//         window.location.replace('/api/auth/signin');
//     }
// }
let user;
app.post("/api/auth/signin", (req,res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    if(email.length > 0){
        db.corpers.findOne({
            where: {
                email: email
            }
        })
        .then(corper =>{
            if(corper){
                const passwordIsValid = bcrypt.compareSync(
                    password,
                    corper.password
                );
                if(!passwordIsValid) {
                    return res.status(401).send({
                        message: "Invalid Password!"
                    });
                } else {
                    session=req.session;
                    session.userid=corper.id;
                    console.log(req.session);
                    user = corper;
                    console.log("Logged in");
                    res.redirect("/api/dashboard/member")
                    ;
                }
        
            } else {
                res.sendStatus(400).send('Profile not found!')
            }
        })
    }
});

app.get('/api/auth/signout',(req,res) => {
    req.session.destroy();
    res.redirect('/welcome');
});

app.get("/api/dashboard/member", (req, res) => {
    // const corperId = req.params.id;
    session=req.session;
    if(!session.userid){
        console.log("Please login");
    } else if(session.userid) {
        db.corpers.findOne(session.userid).then(re)
        res.send(user.firstname); 
        console.log("Logged in.") ;
        console.log(user.firstname); 
    }
    
})
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})