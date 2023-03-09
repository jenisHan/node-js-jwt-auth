module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("questions", {
      level: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    });
  
    return Question;
  };
  