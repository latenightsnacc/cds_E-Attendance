module.exports = (sequelize, Sequelize) => {
    const EventFees = sequelize.define("eventfees", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
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
    return EventFees;
}

