module.exports = (sequelize, Sequelize) => {
    const Avatar = sequelize.define("avatars", {
        name: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER
        },
        file_url: {
            type: Sequelize.STRING
        },
    });

    return Avatar;
};