const corper = require("../controllers/corper.controllers");

module.exports = app => {
    app.post("/api/auth/signup", auth.signup);
    app.post("/api/auth/signin", auth.signin);
    app.post("/api/auth/signout");
    app.post("/api/auth/admin/signup", auth.adminSignup);
    app.post("/api/auth/admin/signin");
    app.post("/api/auth/admin/signout");
}