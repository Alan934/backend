const { sequelize } = require("../config/config");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull : true, 
    },
    email: {
      type: DataTypes.STRING(500),
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: true, 
    },
    role: {
      type: DataTypes.ENUM(["user", "admin"]),
      defaultValue: "user",
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

module.exports = User;