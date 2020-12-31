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
          url: 'https://artsysoloproject.s3.amazonaws.com/1609309086841.jpg'
        },
        {
          artProductId: 2,
          url: 'https://artsysoloproject.s3.amazonaws.com/1609345376668.jpg'
        },
        {
          artProductId: 3,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
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
