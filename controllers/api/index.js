const router = require('express').Router();

const userRoutes = require('./user-routes');
const foodEntryRoutes = require('./food-entry-routes');

router.use('/users', userRoutes);
router.use('/foodEntries', foodEntryRoutes);

module.exports = router;
