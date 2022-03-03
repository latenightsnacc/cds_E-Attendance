const db = require("../models");
const Corper = db.corpers;
const Coordinator = db.coordinators;

exports.signup = async (req, res) => {
    
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
        rolse: req.body.roles,
        state: req.body.state 
    }
    Corper.create(corper)
    .then(data =>  {
        console.log("Corper's profile created: "+ corper);
        res.send(data);
        return Corper;
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Error occured while creating profile. "
        });
    })
     
}
exports.adminSignup = async (req, res) => {
    
    if(!req.body){
        res.status(400).send({
            message: "Form fields incomplete!"
        })
        return;
    }
        
    const coodinator = {
        firstname: req.body.firstname,
        surname: req.body.surname,
        cdsGroup: req.body.cdsGroup,
        lga: req.body.lga,
        ppa: req.body.ppa,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        
        password: bcrypt.hashSync(req.body.statecode, 8),
        role: req.body.roles,
        state: req.body.state 
    }
    Corper.create(corper)
    .then(data =>  {
        console.log("Coordinator's profile created: "+ corper);
        res.send(data);
        return Corper;
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Error occured while creating profile. "
        });
    })
     
}