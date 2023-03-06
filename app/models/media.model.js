module.exports = (sequelize, Sequelize) => {
    const Media = sequelize.define("medias", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        file_url: {
            type: Sequelize.STRING
        },
    });

    return Media;
};