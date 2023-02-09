module.exports = (sequelize, Sequelize) => {
    const PassedTest = sequelize.define("passedTests", {
        level: {
            type: Sequelize.INTEGER
        },
        testing_counter: {
            type: Sequelize.INTEGER
        },
        passed_counter: {
            type: Sequelize.INTEGER
        }       
    });

    return PassedTest;
};