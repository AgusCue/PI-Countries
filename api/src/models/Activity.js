const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulties: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false,
    },
  });
};
