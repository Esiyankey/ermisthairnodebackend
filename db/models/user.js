'use strict';
const {Model,Sequelize, DataTypes} = require('sequelize');
const bcrypt = require("bcrypt")
const sequelize = require('../../config/database');
const AppError = require('../../utils/appError');




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
      validate:{
        notNull:{
          msg:"userType cannot be null",
        },
        notEmpty:{
          msg:"userType cannot be empty"
        }
      }
    },
    userName: {
      type: Sequelize.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"userName cannot be null",
        },
        notEmpty:{
          msg:"userName cannot be empty"
        }
      }
    },
    email: {
      type: Sequelize.STRING,
      unique:true,
      allowNull:false,
      validate:{
        notNull:{
          msg:"email cannot be null",
        },
        notEmpty:{
          msg:"email cannot be empty"
        },
        isEmail:{
          msg:"inavlid email id "
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"password cannot be null",
        },
        notEmpty:{
          msg:"password cannot be empty"
        }
      }
    },
    confirmPassword:{
      type:Sequelize.VIRTUAL,
      set(value){
        if(value === this.password)
        {
          const hashPassword = bcrypt.hashSync(value,10);
          this.setDataValue('password',hashPassword)
        }
        else{
          throw new AppError(
            "password and confirm password does not match." ,400
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