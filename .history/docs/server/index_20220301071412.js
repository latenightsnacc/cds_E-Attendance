require("dotenv").config();
const express = require("express");
const session = require("")
const cors = require("cors");
const db = require("./models");
const app = express();
const PORT = process.env.PORT;

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.json({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})
require("./routes/auth.routes")(app);
require("./routes/corper.routes")(app);
require("./routes/coordinator.routes")(app);
require("./routes/attendance.routes")(app);
require("./routes/note.routes")(app);
require("./routes/monthlydues.routes")(app);
require("./routes/projectfee.routes")(app);
require("./routes/eventfee.routes")(app);
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})