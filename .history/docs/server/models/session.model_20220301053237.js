module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("session", {
        ssid: {
            type: Sequelize.INT,
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

