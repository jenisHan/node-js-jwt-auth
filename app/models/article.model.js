module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        contact_number: {
            type: Sequelize.STRING
        },
        articleCategoryId: {
            type: Sequelize.INTEGER
        },
        attach_url: {
            type: Sequelize.STRING
        },
        source: {
            type: Sequelize.STRING
        },
        recommends: {
            type: Sequelize.INTEGER
        },
        oppositions:{
            type: Sequelize.INTEGER
        },
        browingcount:{
            type: Sequelize.INTEGER
        }     
    });

    return Article;
};