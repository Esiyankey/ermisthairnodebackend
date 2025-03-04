'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "role", {
      type: Sequelize.ENUM("user", "admin"), // Add roles as needed
      allowNull: false,
      defaultValue: "user"
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "role");
  }
};
