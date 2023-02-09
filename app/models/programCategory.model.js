module.exports = (sequelize, DataTypes) => {
  const ProgramCategory = sequelize.define("programCategories", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    parentId: {
      type: DataTypes.INTEGER
    }
  });

  return ProgramCategory;
};
