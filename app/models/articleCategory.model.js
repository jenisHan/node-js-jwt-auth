module.exports = (sequelize, DataTypes) => {
    const ArticleCategory = sequelize.define("articleCategories", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    });
  
    return ArticleCategory;
  };
  