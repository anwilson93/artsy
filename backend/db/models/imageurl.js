'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageUrl = sequelize.define('ImageUrl', {
    artProductId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  ImageUrl.associate = function(models) {
    // associations can be defined here
    ImageUrl.belongsTo(models.ArtProduct, { foreignKey: 'artProductId' });
  };
  return ImageUrl;
};