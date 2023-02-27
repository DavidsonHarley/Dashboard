/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Details', [
      {
        detail: 'Маслянный поддон',
        price: 1000,
        categoryID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Поршень',
        categoryID: 1,
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Цепь грм',
        categoryID: 1,
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Бампер',
        categoryID: 2,
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Капот',
        categoryID: 2,
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Крышка багажного отсека',
        categoryID: 2,
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Картер коробки',
        categoryID: 3,
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Первичный вал',
        categoryID: 3,
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        detail: 'Вилка включения для 6 передачи',
        categoryID: 3,
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
