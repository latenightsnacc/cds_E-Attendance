require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dbCon
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

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

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
                    setCookie('user-login', corper.id, 1);
                    next();
                }
        
            } else {
                res.sendStatus(400).send('Profile not found!')
            }
        })
    }
})

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})