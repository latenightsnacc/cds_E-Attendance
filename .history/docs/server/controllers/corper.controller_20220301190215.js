const db = require("../models");
const Corper = db.corpers;

// Retrieve Corper by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Corper.findByPk(id).then(data => {
        if(data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Note with id=${id}`
            })
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send({
            message: `Error retrieving Tutorial with id=${id}`
        })
    })

};

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

