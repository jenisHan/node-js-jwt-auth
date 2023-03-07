module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("questions", {
      position: {
        type: DataTypes.STRING
      }, 
      degree: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    });
  
    return Question;
  };
  