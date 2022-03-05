require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
let session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./db");
const mysqlStore = require("express-mysql-session")(session);

const app = express();
const PORT = process.env.PORT;
const ONE_DAY = 24*60*60*1000;

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const options = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user:process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
}

const pool = mysql.createPool(options);

const sessionStore = new mysqlStore(options, pool);

app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        httpOnly:true,
        maxAge: ONE_DAY,
        sameSite: true,
        secure: IN_PROD
    }
}))

app.get("/", (req,res) => {
    res.json({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})


app.post("/api/auth/signup", async (req, res) => {
    try{
        if(!req.body){
            return res.status(400).send({
                message: "Form fields incomplete!"
            })
            
        }
        const salt = bcrypt.genSaltSync(10);
        
        const firstname= req.body.firstname;
        const surname= req.body.surname;
        const batch= req.body.batch;
        const statecode= req.body.statecode;
        const cdsGroup= req.body.cdsGroup;
        const lga= req.body.lga;
        const ppa= req.body.ppa;
        const email= req.body.email;
        const phoneNo= req.body.phoneNo;
        const profilePic= req.body.profilePic;
        const password= bcrypt.hashSync(req.body.statecode, salt);
        const status= req.body.status;
        const roles= req.body.roles;
        const state= req.body.state;

        const newCorper = await db.insertCorper(firstname,surname,batch,statecode,cdsGroup,lga,ppa,email,phoneNo,profilePic,password,status,roles,state).then(corperId => {
            return db.getCorperById(corperId);
        }).catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Error occured while creating profile. "
            });
        });
        req.session.userId = newCorper.id;
        return res.redirect('/api/auth/signup')
        
    }catch(e){
        console.log(e);
    }
    
app.post("/api/auth/signin", async (req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const corper = await db.getCorperByEmail(email);

        if(!corper){
            return res.send({
                message: "Invalid email";
            })
        }

        const passwordIsValid = bcrypt.compareSync(password, corper.password);

        if()
    }catch(e){
        console.log(e);
    }
    
    //  //
    let savedPw = [];
    dbConnect.query("SELECT * FROM corpers WHERE email = ?", email, (err,result) =>{
        if(err){
            console.log(err);
        } else {
            const passwordIsValid = bcrypt.compareSync(password, result[0].password);
            console.log(passwordIsValid);
            if(passwordIsValid){
                session=req.session;
                session.userId=result[0].id;
                res.send(`/api/dashboard/member/${session.userId}`);
                console.log("Logged in");
            } else {
                return res.status(401).send({
                    message: "Invalid Password!"
                }); 
            }
        }
    })
    
    
  
    //     //     } else {
    //     //         
    //     //             
    //     //          
    //     //     }
    
    //     // } else {
    //     //     res.sendStatus(400).send('Profile not found!')
    //     // }
    // }

});

app.get('/api/auth/signout',(req,res) => {
    req.session.destroy();
    res.send('/api/auth/signin');
});



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