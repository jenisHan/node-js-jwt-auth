module.exports = (sequelize, Sequelize) => {
    const Avatar = sequelize.define("avatars", {
        name: {
            type: Sequelize.STRING
        },
        file_url: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER
        }   
    });

    return Avatar;
};