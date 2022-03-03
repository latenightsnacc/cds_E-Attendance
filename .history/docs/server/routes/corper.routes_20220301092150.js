const corper = require("../controllers/corper.controller");

module.exports = app => {
    app.get("/api/dashboard/member", corper.getDashboard);
}