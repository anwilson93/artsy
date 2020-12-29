'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArtProductReview = sequelize.define('ArtProductReview', {
    artProductId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  ArtProductReview.associate = function(models) {
    // associations can be defined here
    ArtProductReview.belongsTo(models.ArtProduct, { foreignKey: 'artProductId' });
    ArtProductReview.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return ArtProductReview;
};