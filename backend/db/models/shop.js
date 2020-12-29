'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    shopName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
    Shop.belongsTo(models.User, { foreignKey: 'userId' });
    Shop.hasMany(models.ArtProduct, { foreignKey: 'shopId' });
  };
  return Shop;
};