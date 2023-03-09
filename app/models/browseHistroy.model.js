module.exports = (sequelize, Sequelize) => {
    const BrowseHistory = sequelize.define("browseHistories", {
        userId: {
            type: Sequelize.INTEGER
        },
        campusId: {
            type: Sequelize.INTEGER
        }
    });

    return BrowseHistory;
};