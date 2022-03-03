module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("sessions", {
    session_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    expires: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data: {
        type: Sequelize.STRING(50000),
        allowNull: false
    }
    
    });
    return Session;
}