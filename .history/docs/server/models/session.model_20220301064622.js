module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("sessions", {
    date: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    expires: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data: {
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