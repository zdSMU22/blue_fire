const { foodCategory } = require('../models');

const foodCategoryData = [
  {
    name: "Breakfast"
  },
  {
    name: "Lunch"
  },
  {
    name: "Dinner"
  },
  {
    name: "Snack"
  }
];

const seedfoodCategory = () => foodCategory.bulkCreate(foodCategoryData); 

module.exports = seedfoodCategory;