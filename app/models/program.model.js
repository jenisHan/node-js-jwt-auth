module.exports = (sequelize, Sequelize) => {
    const Program = sequelize.define("programs", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        requirement: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATEONLY
        },
        purchases: {
            type: Sequelize.INTEGER
        },
        recommends: {
            type: Sequelize.INTEGER
        },      
        file_url: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER
        },
    });

    return Program;
};