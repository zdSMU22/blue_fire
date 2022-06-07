const seedUsers = require('./user-seeds');

const seedAll = () => Promise.all([
                                     seedUsers()
                                  ]);

module.exports = seedAll;                             