module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    promoCode: DataTypes.STRING
  });

  return Promotion;
};
