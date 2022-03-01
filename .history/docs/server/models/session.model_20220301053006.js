module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("session", {
        ssid: {
            type: Sequelize.INT,
            primaryKey:true,
            allowNull: false,
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        batch: {
            type: Sequelize.STRING,
            allowNull: false
        },
        statecode: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cdsGroup: {
            type: Sequelize.STRING,
            allowNull:false
        },
        lga: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ppa: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNo: {
            type: Sequelize.STRING,
            allowNull:false
        },
        profilePic: {
            type: Sequelize.STRING,
            allowNull:true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        roles: {
            type: Sequelize.STRING,
            allowNull: true
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Session;
};

