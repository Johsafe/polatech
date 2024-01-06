module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    fname: {
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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Admin;
};
