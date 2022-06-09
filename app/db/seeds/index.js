const seedUsers = require('./user-seeds');
const seedFitnessPlans = require('./fitnessplan-seeds');
const seedworkoutJournal = require('./workoutJournalData');

const seedAll = () => Promise.all([
                                     seedUsers(),
                                     seedFitnessPlans(),
                                     seedworkoutJournal()
                                  ]);

module.exports = seedAll;                             