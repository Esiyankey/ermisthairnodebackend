'use strict';
const {Model,Sequelize, DataTypes} = require('sequelize');
const bcrypt = require("bcrypt")
const sequelize = require('../../config/database');




const user = sequelize.define('Users',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userType: {
      type: DataTypes.ENUM('0', '1', '2'), // Define allowed values
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    confirmPassword:{
      type:DataTypes.VIRTUAL,
      set(value){
        if(value === this.password)
        {
          const hashPassword = bcrypt.hashSync(value,10);
          this.setDataValue('password',hashPassword)
        }
        else{
          throw new Error(
            "password and confirm password does not match." 
          )
        }
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt:{
      type: DataTypes.DATE,
    },

  },
  {
    paranoid:true,
    freezeTableName:true,
    modelName:"user"
  }
);

module.exports = user