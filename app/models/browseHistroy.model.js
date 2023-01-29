module.exports = (sequelize, Sequelize) => {
    const BrowseHistory = sequelize.define("browseHistories", {
        date: {
            type: Sequelize.DATEONLY
        },
        count: {
            type: Sequelize.INTEGER
        }

    });

    return BrowseHistory;
};