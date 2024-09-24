require('dotenv').config(); 

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE, 
  process.env.DB_USERNAME, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

const models = {
  User: require('./user')(sequelize, Sequelize.DataTypes),
  Promotion: require('./promotion')(sequelize, Sequelize.DataTypes)
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});


models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
