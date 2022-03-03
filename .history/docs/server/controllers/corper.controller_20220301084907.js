const db = require("../models");
const Corper = db.corpers;

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

