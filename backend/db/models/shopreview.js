'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShopReview = sequelize.define('ShopReview', {
    shopId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  ShopReview.associate = function(models) {
    // associations can be defined here
    ShopReview.belongsTo(models.Shop, { foreignKey: 'shopId' });
    ShopReview.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ShopReview;
};