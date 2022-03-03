const db = require("../models");
const Corper = db.corpers;

// Retrieve Corper by id
exports.findCorper = (corperId) => {
    return Corper.findOne({
        where: {
            id
        }
    })
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

exports.getDashboard= async (req, res) => {
    const {userId} = req.session
    if(userId){
        try{
            let user = Corper.findOne(userId);
            req.user = user;
            res.send(user)
        }catch(e) {
            console.log(e);
        }
    }
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

