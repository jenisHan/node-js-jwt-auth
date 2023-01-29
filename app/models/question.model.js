module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("questions", {
      description: {
        type: DataTypes.STRING
      }
    });
  
    return Question;
  };
  