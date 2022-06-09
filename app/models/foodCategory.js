const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class foodCategory extends Model {}

foodCategory.init(
{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    catName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
    sequelize,
    timestamps: automatic,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodCategory',
    }
);

module.exports = foodCategory;