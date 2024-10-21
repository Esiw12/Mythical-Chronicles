const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', { 
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  profilePicture: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
