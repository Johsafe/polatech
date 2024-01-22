module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define("OrderItems", {
    order_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pdctId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  });

  OrderItems.associate = function (models) {
    OrderItems.belongsTo(models.Order);
    OrderItems.belongsTo(models.Products);
  };

  return OrderItems;
};
