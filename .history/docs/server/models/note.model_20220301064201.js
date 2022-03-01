module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    month: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    venue: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    topic: {
        type: Sequelize.STRING,
        allowNull:true
    },
    startTime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endTime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    minutes: {
        type: Sequelize.STRING,
        allowNull:false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cdsGroup: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
    });
return Note;
}