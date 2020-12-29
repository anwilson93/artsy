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
    ArtProduct.hasMany(models.OrderDetail, { foreignKey: 'artProductId' });
    ArtProduct.hasMany(models.ArtProductReview, { foreignKey: 'artProductId' });
    ArtProduct.hasMany(models.Fav, { foreignKey: 'artProductId' });
    ArtProduct.hasMany(models.ImageUrl, { foreignKey: 'artProductId' });
    ArtProduct.belongsTo(models.Shop, { foreignKey: 'shopId' });
  };
  return ArtProduct;
};