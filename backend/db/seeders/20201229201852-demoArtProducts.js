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
      },
      {
        title: 'Mountain Paradise',
        description: 'Photo taken at Kluane National Park and Reserve of Canada, Canada',
        price: 25.00,
        numberAvailable: 1,
        category: 'photography',
        shopId: 1
      },
      {
        title: 'Banff National Park',
        description: 'Photo taken at Banff National Park, Canada',
        price: 30.00,
        numberAvailable: 1,
        category: 'photography',
        shopId: 1
      },
      {
        title: 'The Mountain',
        description: 'Photo taken at Banff National Park, Canada. Edited with Photoshop',
        price: 40.00,
        numberAvailable: 1,
        category: 'photography',
        shopId: 1
      },
      {
        title: 'Glass Forest',
        description: 'Glass art',
        price: 140.00,
        numberAvailable: 1,
        category: 'glass',
        shopId: 1
      },
      {
        title: 'Glass Horse',
        description: 'Small glass horse. This is handmade using pyrex glass. It stands 3" tall and 3"wide.',
        price: 20.00,
        numberAvailable: 1,
        category: 'glass',
        shopId: 1
      },
      {
        title: 'Glass Bowl / Dish',
        description: 'Rare glass dish. 10 inch diameter. 8 inches tall. Art object for coffee table or bookshelf.',
        price: 100.00,
        numberAvailable: 1,
        category: 'glass',
        shopId: 1
      },
      {
        title: 'Portrait of Miss Iza Duffus Hardy, 1872 By Ford Madox Brown',
        description: 'Extremely rare pastel portrait.',
        price: 300.00,
        numberAvailable: 1,
        category: 'pastel',
        shopId: 1
      },
      {
        title: 'Study of Birds',
        description: 'Custom portrait from photo. Original, gift idea. Portrait of birds in flight, soft pastel. Size 11"/15" (30/40 cm). Handmade',
        price: 100.00,
        numberAvailable: 1,
        category: 'pastel',
        shopId: 1
      },
      {
        title: 'Happy Halloween',
        description: 'Very cool Halloween drawing',
        price: 15.00,
        numberAvailable: 1,
        category: 'drawing',
        shopId: 1
      },
      {
        title: 'In Flight',
        description: 'Hand drawn.',
        price: 40.00,
        numberAvailable: 1,
        category: 'drawing',
        shopId: 1
      },
      {
        title: 'Boston Scramble',
        description: 'Very cool, unique doodle',
        price: 25.00,
        numberAvailable: 1,
        category: 'drawing',
        shopId: 1
      },
      {
        title: 'Abstract Colorful Decor',
        description: 'Custom wall decor. Handmade',
        price: 100.00,
        numberAvailable: 1,
        category: 'decor',
        shopId: 1
      },
      {
        title: "Boxer's Dream",
        description: 'Handmade portrait. Materials used: pencil',
        price: 200.00,
        numberAvailable: 1,
        category: 'portrait',
        shopId: 1
      },
      {
        title: 'Grow',
        description: 'This is a fine art giclée print made from my original watercolor painting. Paper is Arctic Matte - A basic matte paper, with a smooth, flat surface. This paper is acid free. (Bright white / 230gsm)',
        price: 30.00,
        numberAvailable: 1,
        category: 'watercolor',
        shopId: 1
      },
      {
        title: 'Untitled',
        description: 'Bright, beautiful watercolor painting. Perfect for wall decor. Materials: paper, ink, art print, giclee print. Professionally printed using an Epson, on fine art paper with a matte finish.',
        price: 178.00,
        numberAvailable: 1,
        category: 'watercolor',
        shopId: 1
      },
      {
        title: 'Bowl',
        description: 'Custom made and designed bowl',
        price: 50.00,
        numberAvailable: 1,
        category: 'pottery',
        shopId: 1
      },
      {
        title: 'The Mountain',
        description: 'Fine art, handmade on canvas. Materials: gallery wrapped, canvas, acrylic paint, contemporary.',
        price: 70.00,
        numberAvailable: 1,
        category: 'canvas',
        shopId: 1
      },
      {
        title: 'Purple Whale',
        description: 'Beautiful handmade painting on canvas',
        price: 100.00,
        numberAvailable: 1,
        category: 'canvas',
        shopId: 1
      },
      {
        title: 'Lion Being Rudely Awakened By Hyenas',
        description: 'Modern photo. Wall Art Picture',
        price: 300.00,
        numberAvailable: 1,
        category: 'photography',
        shopId: 1
      },
      {
        title: 'Deer',
        description: 'Artistic wall art photo',
        price: 18.00,
        numberAvailable: 1,
        category: 'photography',
        shopId: 1
      },
      {
        title: 'The Lady',
        description: 'Completely handmade sculpture. Very rare, only 1 in stock',
        price: 250.00,
        numberAvailable: 1,
        category: 'sculpture',
        shopId: 1
      },
      {
        title: 'Two Heads Are Better Than One',
        description: 'Painting done on canvas. Large print',
        price: 85.00,
        numberAvailable: 1,
        category: 'canvas',
        shopId: 1
      },
      
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
