module.exports = (sequelize, Sequelize) => {
    const Campus = sequelize.define("campuses", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER
        },
        browses: {
            type: Sequelize.INTEGER
        },  
        recommends: {
            type: Sequelize.INTEGER
        },
        unrecommends: {
            type: Sequelize.INTEGER
        },   
        level: {
            type: Sequelize.INTEGER
        }

    });

    return Campus;
};