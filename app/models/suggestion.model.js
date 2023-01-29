module.exports = (sequelize, Sequelize) => {
    const Suggestion = sequelize.define("suggestions", {
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
        draft:{
            type: Sequelize.STRING
        }

    });

    return Suggestion;
};