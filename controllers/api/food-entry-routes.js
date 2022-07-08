const router = require('express').Router();
const foodEntryService = require('../../app/services/food-service');

router.post('/', (req, res) => {
    const { userId, description, calories, foodCategoryId } = req.body;
    const result = foodEntryService.createFoodEntry(userId, description, calories, foodCategoryId);
    if(result.succcess) {
        const foodEntry = result.succcess;
        res.location('/api/foodEntries/' + foodEntry.id);
        res.status(201).send(foodEntry);
    } else {
        if(result.error === "Arguments are missing or incorrect") {
            res.status(400).send(result.error);
        } else {
            res.sendStatus(500);
        }
    }
});

module.exports = router;
