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
            type: Sequelize.INTEGER
        },
        port: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATEONLY
        },
        price: {
            type: Sequelize.INTEGER
        },
        from: {
            type: Sequelize.STRING
        },
        to: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.STRING
        },
        runner: {
            type: Sequelize.STRING
        },
        total_weight: {
            type: Sequelize.INTEGER
        },
        load_weight: {
            type: Sequelize.INTEGER
        },
        weight: {
            type: Sequelize.INTEGER
        },
        current_height: {
            type: Sequelize.INTEGER
        },
        width: {
            type: Sequelize.INTEGER
        },
        length: {
            type: Sequelize.INTEGER
        },
        full_load: {
            type: Sequelize.INTEGER
        },
        engine: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATEONLY
        },
        factory: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        licence: {
            type: Sequelize.STRING
        },
        visit: {
            type: Sequelize.INTEGER
        },
        limit: {
            type: Sequelize.INTEGER
        },
        datacol: {
            type: Sequelize.INTEGER
        }
    });

    return Data;
};