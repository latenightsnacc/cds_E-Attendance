require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
let session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
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


app.post("/api/auth/signup", (req, res) => {
    try{
        if(!req.body){
            res.status(400).send({
                message: "Form fields incomplete!"
            })
            return;
        }
        const salt = bcrypt.genSaltSync(10);
        
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
        
    }catch(e){
        console.log(e);
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