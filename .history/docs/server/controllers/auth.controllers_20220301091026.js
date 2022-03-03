const db = require("../models");
const Corper = db.corpers;
const Coordinator = db.coordinators;

// Create Corper Profile
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
        roles: req.body.roles,
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

// Login to Corper Dashboard
exports.signin = (req,res,next) => {
    Corper.findOne({
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
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        req.session.userId = corper.id;
        req.session.user = corper;
        res.send(corper);
        res.redirect()
        
    }).catch(err => {
        res.status(500).send({message: err.message});
    })
}


// Create Coordinator Dashboard
exports.adminSignup = async (req, res) => {
    
    if(!req.body){
        res.status(400).send({
            message: "Form fields incomplete!"
        })
        return;
    }
        
    const coordinator = {
        firstname: req.body.firstname,
        surname: req.body.surname,
        cdsGroup: req.body.cdsGroup,
        lga: req.body.lga,
        ppa: req.body.ppa,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        role: req.body.role,
        state: req.body.state 
    }
    Coordinator.create(coordinator)
    .then(data =>  {
        console.log("Coordinator's profile created: "+ coordinator);
        res.send(data);
        return Coordinator;
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Error occured while creating profile. "
        });
    })
     
}

// Create Coordinator Dashboard
