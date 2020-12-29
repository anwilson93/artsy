'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    orderId: DataTypes.INTEGER,
    artProductId: DataTypes.INTEGER,
    artProductTitle: DataTypes.STRING,
    artProductPrice: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  }, {});
  OrderDetail.associate = function(models) {
    // associations can be defined here
    OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId' });
    OrderDetail.belongsTo(models.ArtProduct, { foreignKey: 'artProductId' });
  };
  return OrderDetail;
};