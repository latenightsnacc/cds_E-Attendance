module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("sessions", {
        ssid: {
            type: Sequelize.UUID,
            primaryKey:true,
            
        },
        expires: {
            type: Sequelize.DATE,
          
        },
        data: {
            type: Sequelize.STRING(50000),
        }
    });
    return Session;
};

