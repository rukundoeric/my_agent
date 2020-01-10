'use strict';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'Mireille',
    lastName: 'Niwemuhuza',
    email: 'nimilleer@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    firstName: 'eric',
    lastName: 'rukundo',
    email: 'hhhhhhhhhhhhhh3h3hh3@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  ], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
