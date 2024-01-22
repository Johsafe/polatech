module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    //----product specifications
    //----general

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
    cloudinary_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    inStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    color:{
      type: DataTypes.STRING,
      allowNull:true,
    },

    screen_size:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    // ports:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },
    condition: {
      type: DataTypes.STRING,
      defaultValue: "Brand New",
      validate: {
        isIn: [["Brand New", "Refurbished"]],
      },
    },

    //-------laptop & desktop
    processor:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    graphic_card:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    ram_size:{
      type: DataTypes.STRING,
      allowNull:true,
    },
    storage:{
      type: DataTypes.STRING,
      allowNull:true,
    },

    //-------monitor
    //aspect_ratio:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },
    //screen_tech:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },

    //-------printer
    
     //paper_sizes:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },
    //ink_supported:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },
    //functions:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },
    //print_tech:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },
    //connectivity_type:{
    //   type: DataTypes.STRING,
    //   allowNull:true,
    // },

    //-------computer asssories
  });

  Products.associate = function (models) {
    Products.hasMany(models.OrderItems);
    // Products.belongsTo(models.OrderItems)
  };

  return Products;
};
