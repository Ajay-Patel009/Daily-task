'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
      category_name: 'Electronics',
      parent_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'vehicles',
      parent_id:null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'fasion',
      parent_id: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'telivision',
      parent_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'cooler',
      parent_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'mahendra xUV',
      parent_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'suzuki',
      parent_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 't-shirt',
      parent_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category_name: 'trousers',
      parent_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
