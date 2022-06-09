const seedUsers = require('./user-seeds');
const seedFitnessPlans = require('./fitnessplan-seeds');

const seedAll = () => Promise.all([
                                     seedUsers(),
                                     seedFitnessPlans()
                                  ]);

module.exports = seedAll;                             