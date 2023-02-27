/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        category: 'Двигатель',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Кузов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: 'Коробка передач',
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
