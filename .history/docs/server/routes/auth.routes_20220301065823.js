const auth = require("../controllers/auth.controllers");
module.exports = app => {
    app.post("/api/auth/signup/");
    app.post("/api/auth/signin/");
    app.post("/api/auth/signin/");
}