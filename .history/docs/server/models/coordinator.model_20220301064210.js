module.exports = (sequelize, Sequelize) => {
    const Coordinator = sequelize.define("coordinators", {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lga: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    cds_group: {
        type: Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    }
    });
    return Coordinator;
}

