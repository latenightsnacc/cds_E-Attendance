const corper = require("../controllers/corper.controller");

module.exports = app => {
    app.get("/api/dashboard/member", corper.getDashboard);
    app.post("/api/auth/signin", auth.signin);
    app.post("/api/auth/signout");
    app.post("/api/auth/admin/signup", auth.adminSignup);
    app.post("/api/auth/admin/signin");
    app.post("/api/auth/admin/signout");
}