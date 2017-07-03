'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('users', [
      {
        name: 'Patrick',
        email: 'patrick@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Christian',
        email: 'christian@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Evan',
        email: 'evan@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel',
        email: 'Daniel@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {})
  }
};
