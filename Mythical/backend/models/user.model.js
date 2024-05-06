const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  // Определение атрибутов модели
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {  
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true  // проверка
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
