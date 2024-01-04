//model/Trasaction.js

module.exports = (sequelize, DataTypes) => {
  
  const Transaction = sequelize.define("Transaction", {
    Tranx_Id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Tranx_Date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Transaction;
};
