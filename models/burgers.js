module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
        burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured : {
        type: DataTypes.BOOLEAN,
        defaultValue: "Personal"
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Burgers;
  };
  