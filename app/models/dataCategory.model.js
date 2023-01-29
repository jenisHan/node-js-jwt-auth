module.exports = (sequelize, DataTypes) => {
    const DataCategory = sequelize.define("dataCategories", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    });
  
    return DataCategory;
  };
  