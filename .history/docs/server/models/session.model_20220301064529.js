module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("sessions", {
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
    paymentStatus: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    amountPaid: {
        type: Sequelize.STRING,
        allowNull:false
    }
    });
    return Session;
}