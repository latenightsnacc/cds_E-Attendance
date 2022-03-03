const db = require("../models");
const Corper = db.corpers;
const Attendance = db.attendance;
const MonthlyDues = db.monthlydues;
const ProjectFees = db.projectdues;
const EventFees = db.eventdues;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { config } = require("dotenv");

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

exports.signin = (req,res) => {
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
        const token = jwt.sign({id: corper.id}, config.secret, {
            expiresIn: 86400
        });
        console.log('Login successful!')
        res.status(200).send({
            id: corper.id,
            firstname: corper.firstname,
            surname: corper.surname,
            batch: corper.batch,
            statecode: corper.statecode,
            cdsGroup: corper.cdsGroup,
            lga: corper.lga,
            ppa: corper.ppa,
            email: corper.email,
            phoneNo: corper.phoneNo,
            profilePic: corper.profilePic,
            status: corper.status,
            roles: corper.roles,
            state: corper.state, 
            accessToken: token

        })
    }).catch(err => {
        res.status(500).send({message: err.message});
    })
}
// Retrieve All Active Corpers where CDS = CDS
exports.findAllCorpers = (req,res) => {
    const cds = req.params.cds;
    Corper.findAll({
        where: {
            cdsGroup: cds,
            status: "Active"
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving corpers."
        })
    })
}

exports.corperDashboard = (req,res) => {
    res.status(200).send("Member Dashboard")
}
exports.secGenDashboard = (req,res) => {
    res.status(200).send("Sec Gen Dashboard")
}
exports.treasurerDashboard = (req,res) => {
    res.status(200).send("Treasurer Dashboard")
}
exports.presidentDashboard = (req,res) => {
    res.status(200).send("President Dashboard")
}
// Retrieve Corper by id
exports.findCorper = (corperId) => {
    return Corper.findOne(corperId)
    // const id = req.params.id;
    // Corper.findOne({
    //     where: {id: id}
    .then(corper => {
        res.send(corper)
    }).catc(err => {
        console.log(err);
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving corper."
        })
    })
}

// Update Corper by id
exports.updateCorper = (req,res) => {
    const id = req.params.id;
    Corper.update(req.body, {
        where:{ id: id}
    }).then(data => {
        if(data == id) {
            res.send({
                message: "Corper profile updated!"
            })
        } else {
            res.send({
                message: `Cannot update Corper Profile with id=${id}.`
            })
        }
        
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: `Error updating Tutorial with id=${id}`
        })
    })
}
exports.createAttendance = (corperId, attendance) => {   
    return Attendance.create({
        date: attendance.date,
        month: attendance.month,
        year: attendance.year,
        type: attendance.type,
        status: attendance.status,
        comment: attendance.comment,
        corperId: corperId,
    }).then( (attendance) => {
        console.log("Attendance recorded" + JSON.stringify(attendance, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while creating attendance record: " + err);
    })
}
exports.createMonthlyDues = (corperId, monthlydues) => {   
    return MonthlyDues.create({
        date: monthlydues.date,
        month: monthlydues.month,
        year: monthlydues.year,
        type: monthlydues.type,
        paymentStatus: monthlydues.paymentStatus,
        amountPaid: monthlydues.amountPaid,
        corperId: corperId,
    }).then( (attendance) => {
        console.log("Monthly dues recorded" + JSON.stringify(monthlydues, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while recording monthly dues: " + err);
    })
}
exports.createProjectFees = (corperId, projectfees) => {   
    return ProjectFees.create({
        batch: projectfees.batch,
        title:projectfees.title,
        date: projectfees.date,
        month: projectfees.month,
        year: projectfees.year,
        paymentStatus: projectfees.paymentStatus,
        amountPaid: projectfees.amountPaid,
        corperId: corperId,
    }).then( (projectfees) => {
        console.log("Project Fees recorded:" + JSON.stringify(projectfees, null,4));
        return attendance;
    }).catch((err) => {
        console.log("Errow while recording project fees: " + err);
    })
}
exports.createEventFees = (corperId, eventfees) => {   
    return EventFees.create({
        title: eventfees.title,
        date: eventfees.date,
        month: eventfees.month,
        year: eventfees.year,
        paymentStatus: eventfees.paymentStatus,
        amountPaid: eventfees.amountPaid,
        corperId: corperId,
    }).then( (eventfees) => {
        console.log("Event fees recorded:" + JSON.stringify(eventfees, null,4));
        return eventfees;
    }).catch((err) => {
        console.log("Errow while recording Event Fees: " + err);
    })
}