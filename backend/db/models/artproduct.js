'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtProduct = sequelize.define('ArtProduct', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    numberAvailable: DataTypes.INTEGER,
    category: DataTypes.STRING,
    shopId: DataTypes.INTEGER
  }, {});
  ArtProduct.associate = function(models) {
    // associations can be defined here
    ArtProduct.belongsTo(models.Shop, { foreignKey: 'shopId' });
    ArtProduct.hasMany(models.ImageUrl, { foreignKey: 'artProductId' });
    ArtProduct.hasMany(models.OrderDetails, { foreignKey: 'artProductId' });
  };
  return ArtProduct;
};