const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class exerciseEntry extends Model {}

exerciseEntry.init(
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
    minutes: {
        type: DataTypes.DECIMAL,
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
    modelName: 'exerciseEntry',
    }
);

module.exports = exerciseEntry;