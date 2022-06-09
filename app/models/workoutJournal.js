const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutJournal extends Model {}

WorkoutJournal.init(
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
    total_calories: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.exercise_minutes * this.exercise_calories;
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workoutJournal',
  }
);


WorkoutJournal


module.exports = WorkoutJournal;
