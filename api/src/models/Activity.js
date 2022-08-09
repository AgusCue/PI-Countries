const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activities",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      difficulties: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring")
        ),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
