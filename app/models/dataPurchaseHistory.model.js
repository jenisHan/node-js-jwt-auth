module.exports = (sequelize, DataTypes) => {
    const DataPurchaseHistory = sequelize.define("dataPurchaseHistoies", {
      type: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATEONLY
      }
    });
  
    return DataPurchaseHistory;
  };
  