module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("questions", {
      degreeId: {
        type: DataTypes.STRING
      },
      level: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    });
  
    return Question;
  };
  