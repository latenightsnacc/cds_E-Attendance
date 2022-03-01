module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("sessions", {
        ssid: {
            type: Sequelize.NUMBER,
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

