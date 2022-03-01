const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sessions = require("./session.model")
db.corpers = require("./corper.model")(sequelize, Sequelize);
db.attendance = require("./attendance.model")(sequelize, Sequelize);
db.notes = require("./note.model")(sequelize, Sequelize);
db.monthlydues = require("./monthlydues.model")(sequelize, Sequelize);
db.projectdues = require("./projectfees.model")(sequelize, Sequelize);
db.eventdues = require("./eventfees.model")(sequelize, Sequelize);
db.coordinators = require("./coordinator.model")(sequelize, Sequelize);

db.corpers.hasMany(db.attendance, {as: "attendance_status"});
db.attendance.belongsTo(db.corpers, {
    foreignKey: "corperId",
    as: "corper"
});
db.corpers.hasMany(db.monthlydues, {as: "monthlydue_status"});
db.monthlydues.belongsTo(db.corpers, {
    foreignKey: "corperId",
    as: "corper"
});
db.corpers.hasMany(db.projectdues, {as: "projectfee_status"});
db.projectdues.belongsTo(db.corpers, {
    foreignKey: "corperId",
    as: "corper"
});
db.corpers.hasMany(db.eventdues, {as: "eventfee_status"});
db.eventdues.belongsTo(db.corpers, {
    foreignKey: "corperId",
    as: "corper"
});
module.exports = db;