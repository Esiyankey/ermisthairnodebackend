'use strict';
const sequelize = require('../../config/database');
const { v4: uuidv4 } = require("uuid");

const {Sequelize,DataTypes} = require("sequelize");

const product = sequelize.define("products",{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  productId: {
    type:DataTypes.UUID,
    defaultValue: uuidv4,
  },
  category:{
    type:Sequelize.STRING
  },
  productImage:{
    type:Sequelize.STRING
  },
  productName:{
    type:Sequelize.STRING
  },
  productPrice:{
    type:Sequelize.STRING
  },
  hairType:{
    type:Sequelize.STRING
  },
  hairColor:{
    type:Sequelize.STRING
  },
  hairLength:{
    type:Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})


product.associate = (models) => {
  product.hasMany(models.orders, {
    foreignKey: 'productId',
    as: 'orders'
  });
};
module.exports = product;