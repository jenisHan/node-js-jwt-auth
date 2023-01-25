module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        contact_number: {
            type: Sequelize.STRING
        },
        attach_url: {
            type: Sequelize.STRING
        },
        source: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
       
    });

    return Article;
};