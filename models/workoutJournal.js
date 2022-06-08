const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class workoutJournal extends Model {}

workoutJournal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exercise_calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exercise_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workoutJournal',
  }
);

module.exports = workoutJournal;
