module.exports = (sequelize, Sequelize) => {
    const ProjectFees = sequelize.define("project_fees", {
    batch: {
        type: Sequelize.STRING,
        allowNull: false,
    },
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
return ProjectFees;
}