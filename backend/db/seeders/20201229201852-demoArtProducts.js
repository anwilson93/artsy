'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('ArtProducts', [
      {
        title: 'Knitting',
        description: 'Canvas abstract painting',
        price: 50.00,
        numberAvailable: 1,
        category: 'painting',
        shopId: 1
      },
      {
        title: 'Sensory',
        description: 'Large canvas abstract painting',
        price: 60.00,
        numberAvailable: 1,
        category: 'painting',
        shopId: 1
      },
        {
        title: 'Modern',
        description: 'Medium canvas abstract painting',
        price: 45.00,
        numberAvailable: 1,
        category: 'painting',
        shopId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('ArtProducts', null, {});
  }
};
