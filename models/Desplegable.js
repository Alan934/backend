const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/config');
const SeccionDesplegable = require('./SeccionDesplegableModel');

const Desplegable = sequelize.define(
  "desplegable",
  {
    tituloDesplegable: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    textoDesplegable: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    seccionDesplegableId: {
      type: DataTypes.INTEGER,
      references: {
        model: SeccionDesplegable,
        key: 'id',
      }
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

SeccionDesplegable.hasMany(Desplegable, { foreignKey: 'seccionDesplegableId', onDelete: 'CASCADE' });
Desplegable.belongsTo(SeccionDesplegable, { foreignKey: 'seccionDesplegableId' });

module.exports = Desplegable;
