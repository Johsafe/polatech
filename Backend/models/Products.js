module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cloudinary_id:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    inStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Products;
};
