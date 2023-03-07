module.exports = (sequelize, Sequelize) => {
    const Degree = sequelize.define("degrees", {
        name: {
            type: Sequelize.STRING
        },
        maxdegree: {
            type: Sequelize.STRING
        }

    });

    return Degree;
};