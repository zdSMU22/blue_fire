const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class foodEntry extends Model {}

foodEntry.init(
{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      timestamps: automatic
    },
    description: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    calories: {
        type: DataTypes.NUMBER,
        allowNull:false
    }
},
    {
    sequelize,
    timestamps: automatic,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodEntry',
    }
);

module.exports = foodEntry;