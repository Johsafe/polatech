module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: {
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
      allowNull: false,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "254",
    },
    orderStatus: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      validate: {
        isIn: [["pending", "completed"]],
      },
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "M-pesa",
    },
    isPaid: {
        type: DataTypes.BOOLEAN,  
        defaultValue: false,
      },
      shippingAddress: {
        type: DataTypes.JSON, 
        allowNull: false,
        defaultValue: {
          fullName: "",
          address: "",
          city: "",
          postalCode: "",
          county: "",
          email:"",
        },
      },
  });

  Order.associate = function (models) {
    Order.hasMany(models.OrderItems);
  };

  return Order;
};
