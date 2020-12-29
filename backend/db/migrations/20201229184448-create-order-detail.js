'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Orders' }
      },
      artProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'ArtProducts' }
      },
      artProductTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      artProductPrice: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderDetails');
  }
};