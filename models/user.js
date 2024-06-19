"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require('uuid'); 

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    { 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pin_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      street: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_otp_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeValidate: (user, options) => {
          user.id = uuidv4();
        },
      }
    }
  );
  return User;
};
