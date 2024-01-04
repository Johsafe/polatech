// models/Order.js
const Products = require('./Products');

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
            userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: true, // You might want to set this to false based on your business logic
          },
          status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
            validate: {
              isIn: [['pending', 'completed']],
            },
          },
        }); 
        
        //relationships
        Order.associate = function (models) {
          Order.hasMany(models.OrderItems);
          // Order.belongsTo(models.Authenticate);
        }
    return Order;  
  };
