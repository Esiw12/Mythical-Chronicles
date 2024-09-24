module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return User;
};
