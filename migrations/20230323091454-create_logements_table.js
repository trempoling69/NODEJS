'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('logements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomCommune: {
        type: Sequelize.STRING
      },
      quartier: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      signataire: {
        type: Sequelize.STRING
      },
      surface: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      surface: {
        type: Sequelize.INTEGER
      },
      loyer: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
