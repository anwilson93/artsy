'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    shopName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Shop.associate = function(models) {
    // associations can be defined here
    Shop.hasMany(models.ArtProduct, { foreignKey: 'shopId' });
    Shop.hasMany(models.ShopReview, { foreignKey: 'shopId' });
    Shop.hasMany(models.Fav, { foreignKey: 'shopId' });
    Shop.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Shop;
};