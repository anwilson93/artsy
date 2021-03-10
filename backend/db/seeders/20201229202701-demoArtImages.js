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
          artProductId: 4,
          url: 'https://artsysoloproject.s3.amazonaws.com/1615340966532.jpg'
        },
        {
          artProductId: 3,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        },
        {
          artProductId: 5,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615341672495.jpg'
        },
        {
          artProductId: 6,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615341764709.jpg'
        },
        {
          artProductId: 7,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615341985775.jpg'
        },
        {
          artProductId: 8,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615342156889.jpg'
        },
        {
          artProductId: 9,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615342330395.jpg'
        },
        {
          artProductId: 10,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615342621328.jpg'
        },
        {
          artProductId: 11,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615342796692.jpg'
        },
        {
          artProductId: 12,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615342910227.jpg'
        },
        {
          artProductId: 13,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615343013014.jpg'
        },
        {
          artProductId: 14,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615343111869.jpg'
        },
        {
          artProductId: 15,
          url: 'https://artsysoloproject.s3.amazonaws.com/1615343456087.jpg'
        },
        {
          artProductId: 16,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615343607823.jpg'
        },
        {
          artProductId: 17,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615343835332.jpg'
        },
        {
          artProductId: 18,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615344048448.jpg'
        },
        {
          artProductId: 19,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615344322015.jpg'
        },
        {
          artProductId: 20,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615344559166.jpg'
        },
        {
          artProductId: 21,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615344744482.jpg'
        },
        {
          artProductId: 22,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615344928736.jpg'
        },
        {
          artProductId: 23,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615345182515.jpg'
        },
        {
          artProductId: 24,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615345338472.jpg'
        },
        {
          artProductId: 25,
          url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1615345493098.jpg'
        },
        // {
        //   artProductId: 26,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 27,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 28,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 29,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 30,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 31,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 32,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 33,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 34,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 35,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 36,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 37,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 38,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 39,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 40,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 41,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 42,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 43,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 44,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 45,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 46,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 47,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 48,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 49,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 50,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 51,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 52,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 53,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 54,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 55,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 56,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 57,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 58,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 59,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // },
        // {
        //   artProductId: 60,
        //   url: 'https://artsysoloproject.s3.us-east-2.amazonaws.com/1609345580838.jpg'
        // }
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
