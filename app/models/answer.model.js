module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define("answers", {
      description: {
        type: DataTypes.STRING
      },
      result: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Answer;
  };
  