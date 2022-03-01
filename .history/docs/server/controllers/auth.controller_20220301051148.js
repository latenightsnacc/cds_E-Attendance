const db = require("../models");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Corper = db.corpers;
exports.signin = (req,res) => {
    Corper.findOne({
        where: {
            email: req.body.email,
        }
    }).then(corper => {
        if(!corper) {
            return res.send({
                message: "Profile not found!"
            })
        }
        const passwordIsValid = bcrypt.compareSync()
    })
}