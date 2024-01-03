module.exports = (sequelize, DataTypes) => {
  const Authenticate = sequelize.define("Authenticate", {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        validator: function (emailUsed) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailUsed);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    mobile: {
      // type: DataTypes.DECIMAL,
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   is: /^\d{10}$/, // Simple validation for a 10-digit phone number
      // },
    
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Authenticate.associate = function (models) {
    Authenticate.hasOne(models.Tokens);
  };

  // Authenticate.hasOne(tokenSchema, { foreignKey: 'userId' });
  return Authenticate;
};
