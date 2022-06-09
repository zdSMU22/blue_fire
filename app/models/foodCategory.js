const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection.js');

class FoodCategory extends Model {}

FoodCategory.init(
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodCategory',
    }
);

module.exports = FoodCategory;