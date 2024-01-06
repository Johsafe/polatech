// models/Order.js
const Products = require("./Products");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: true, // You might want to set this to false based on your business logic
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "254",
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      validate: {
        isIn: [["pending", "completed"]],
      },
    },
  });

  //relationships
  Order.associate = function (models) {
    Order.hasMany(models.OrderItems);
    // Order.belongsTo(models.Authenticate);
  };
  return Order;
};
