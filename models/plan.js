"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require('uuid'); 

module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plan.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(16, 3),
        allowNull: true,
      },
      duration_in_month: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_inactive: {
        type: DataTypes.BOOLEAN,
        default: 0,
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
      modelName: "Plan",
      hooks: {
        beforeValidate: (user, options) => {
          user.id = uuidv4();
        },
      }
    }
  );
  return Plan;
};
