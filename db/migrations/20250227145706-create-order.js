'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       productId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: products,
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      wigName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      customerName:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      location:{
        type:Sequelize.STRING,
        allowNull: false,
      },
     length:{
        type:Sequelize.INTEGER,
        allowNull: false,
      },
      color:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      styleType:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      frontalType:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      wigType:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      serviceType:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      orderDate:{
        type:Sequelize.DATE,
        allowNull: false,
      },
      deliveryDate:{
        type:Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};