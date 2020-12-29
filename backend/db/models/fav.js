'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fav = sequelize.define('Fav', {
    userId: DataTypes.INTEGER,
    artProductId: DataTypes.INTEGER,
    shopId: DataTypes.INTEGER
  }, {});
  Fav.associate = function(models) {
    // associations can be defined here
    Fav.belongsTo(models.User, { foreignKey: 'userId' });
    Fav.belongsTo(models.Shop, { foreignKey: 'shopId' });
    Fav.belongsTo(models.ArtProduct, { foreignKey: 'artProductId' });
  };
  return Fav;
};