module.exports = (sequelize, Sequelize) => {
    const Setting = sequelize.define("settings", {
        title: {
            type: Sequelize.STRING(1000),
        },
        value: {
            type: Sequelize.TEXT
        }
    });

    return Setting;
};