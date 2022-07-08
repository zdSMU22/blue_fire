const { User, FoodEntry, FoodCategory } = require('../models');
const validationUtils = require('../../utils/validation-utils');

const isUserValid = (userId) => {
    if(validationUtils.isNotNullNorEmpty(userId)) {
        return User.findByPk(userId)
                   .map(u => { return { success: (u) ? true : false }; });
    } else {
        return Promise.success({ success: false });
    }
}

const isDescriptionValid = (description) => {
    return validationUtils.isNotNullNorEmpty(description);
}

const isCaloryValid = (calories) => {
    return validationUtils.isPositiveNumber(calories);
}

const isFoodCategoryValid = (foodCategoryId) => {
    if(validationUtils.isNotNullNorEmpty(foodCategoryId)) {
        return FoodCategory.findByPk(foodCategoryId)
                           .map(fc => { return { success: (fc) ? true : false }; });
    } else {
        return Promise.success({ success: false });
    }
}

const createFoodEntry = (userId, description, calories, foodCategoryId) => {
    Promise.all([ isUserValid(userId), isFoodCategoryValid(foodCategoryId) ])
           .then(([ userValidation, foodCategoryValidation ]) => {
            if(userValidation.success && 
               foodCategoryValidation.success &&        
               isDescriptionValid(description) &&
               isCaloryValid(calories)) {
                   return FoodEntry.create({ userId: userId, description: description, calories: calories, categoryId: foodCategoryId })
                                   .map(fe => { return { success: fe }; });
               } else {

               }
           });


    if(isUserValid(userId) &&
       isDescriptionValid(description) &&
       isCaloryValid(calories) &&
       isFoodCategoryValid(foodCategoryId)) {

        FoodEntry.create({ userId: userId, description: description, calories: calories, categoryId: foodCategoryId })
                 .then((foodEntry) => {
                    return({ success: foodEntry });
                 }).catch((error) => {
                    return({ error: error });
                 });
    } else {
        return({ error: "Arguments are missing or incorrect" });
    }
}

module.exports = { createFoodEntry };