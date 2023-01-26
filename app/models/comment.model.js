module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
      description: {
        type: Sequelize.STRING
      }
    });
    return Comment;
  };
  