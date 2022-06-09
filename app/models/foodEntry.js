const { Model, DataTypes } = require('sequelize');
const FoodCategory = require('./FoodCategory');

const sequelize = require('../../config/connection.js');

class FoodEntry extends Model {}

FoodEntry.init(
{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodEntry',
    }
);

FoodEntry.hasOne(FoodCategory, { foreignKey: 'categoryId', as: 'category' });
FoodCategory.belongsTo(FoodEntry);

module.exports = FoodEntry;