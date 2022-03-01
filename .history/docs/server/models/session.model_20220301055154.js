module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("sessions", {
        expires: {
            type: Sequelize.STRING,
          
        },
        data: {
            type: Sequelize.STRING(50000),
        }
    });
    return Session;
};

