'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    // totalAmount: DataTypes.FLOAT,
    userId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.hasMany(models.OrderDetail, { foreignKey: 'orderId' });
  };
  return Order;
};