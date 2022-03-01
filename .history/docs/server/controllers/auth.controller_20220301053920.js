const db = require("../models");
const bcrypt = require("bcryptjs");
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
        const passwordIsValid = bcrypt.compareSync(req.body.password, corper.password);
        if(!passwordIsValid){
            res.send({message: "Invalid Password!"})
        }
        req.session.loggedin = true;
        req.ses
    })
}