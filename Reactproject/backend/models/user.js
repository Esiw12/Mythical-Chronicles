const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  avatar: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hashedPassword);
    }
  },
});


const Log = sequelize.define('Log', {});


const Reg = sequelize.define('Reg', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});


User.hasOne(Log);
User.hasOne(Reg);

sequelize.sync();

module.exports = { User, Log, Reg };
