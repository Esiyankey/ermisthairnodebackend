'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("orders", "wigName");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orders", "wigName", {
      type: Sequelize.STRING, // Change type accordingly (e.g., Sequelize.INTEGER, Sequelize.DATE)
      allowNull: true, // Adjust as needed
    });
  },
};
