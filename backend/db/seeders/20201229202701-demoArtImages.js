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
      return queryInterface.bulkInsert('ImageUrls', [
        {
          artProductId: 1,
          url: 'https://unsplash.com/photos/pqtOMmZBpM8'
        },
        {
          artProductId: 2,
          url: 'https://unsplash.com/photos/049a2i5StZs'
        },
        {
          artProductId: 3,
          url: 'https://unsplash.com/photos/ZrVUwpiMtmw'
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
    return queryInterface.bulkDelete('ImageUrls', null, {});
  }
};
