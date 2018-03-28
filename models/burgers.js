module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
        burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured : {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
    timestamps : false
    });
    return Burgers;
  };
  