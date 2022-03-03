const auth = require("../controllers/auth.controllers");
const Corper = require("../controllers/corper.controller")
module.exports = app => {
    app.post("/api/auth/signup");
    app.post("/api/auth/signin");
    app.post("/api/auth/signout");
    app.post("/api/auth/admin/signup");
    app.post("/api/auth/admin/signin");
    app.post("/api/auth/admin/signout");
}