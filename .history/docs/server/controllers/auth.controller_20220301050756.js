const db = require("../models");
const Corper = db.corpers;
exports.signin = (req,res) => {
    Corper.findOne {
        where: {
            email: req.body.emai
        }
    }
}