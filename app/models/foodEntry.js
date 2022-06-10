const { Model, DataTypes } = require('sequelize');
const FoodCategory = require('./FoodCategory');
const User = require('./User');

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
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
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

FoodCategory.hasMany(FoodEntry, { foreignKey: 'categoryId', as: 'entries' });
FoodEntry.belongsTo(FoodCategory, { as: 'category' });

FoodEntry.belongsTo(User, { as: 'user' });
User.hasMany(FoodEntry, { foreignKey: 'userId', as: 'foodEntries' });

module.exports = FoodEntry;