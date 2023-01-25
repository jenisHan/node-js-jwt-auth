module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("datas", {
        name: {
            type: Sequelize.STRING
        },
        file_url: {
            type: Sequelize.STRING
        },
        data_type: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.INTEGER
        },
        unit: {
            type: Sequelize.STRING
        },
        specification: {
            type: Sequelize.STRING
        },
        purpose: {
            type: Sequelize.STRING
        },
        prediction_date: {
            type: Sequelize.DATEONLY
        },
        datacol: {
            type: Sequelize.STRING
        },
        from: {
            type: Sequelize.STRING
        },
        to: {
            type: Sequelize.STRING
        },
        browses: {
            type: Sequelize.INTEGER
        }

    });

    return Data;
};