const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    issue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img_URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Home Repair"
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;