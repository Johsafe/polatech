// const Authenticate = require("./Authenticate");

module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define("Tokens", {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
          },    
    }); 
    Token.associate = function({ Authenticate }) {
        Token.belongsTo(Authenticate);
      };
    // Token.belongsTo(authenticate, { foreignKey: 'authenticateId' }); 
    return Token;

    
  };

  
  