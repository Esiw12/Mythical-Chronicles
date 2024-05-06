const { Sequelize } = require('sequelize'); //импорт
require('dotenv').config(); //подгрузка данных
//новая модель
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, { 
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});
//экспорт модели
module.exports = sequelize;
