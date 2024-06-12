const { Model, DataTypes } = require("sequelize");

const connection = require("../utils/database");

class Plan extends Model {}

Plan.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true
    },
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
    created_by: {
      type: DataTypes.UUID,
      allowNull:true
    },
  },
  {
    sequelize:connection,
    modelName: "plan",
    freezeTableName: false,

  }
);

module.exports = Plan;