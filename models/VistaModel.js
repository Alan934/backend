// models/VistaModel.js
const { sequelize } = require("../config/config");
const { DataTypes } = require("sequelize");

const Vista = sequelize.define(
  "vistas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombreVista: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    iconUrlVista: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Vista;

