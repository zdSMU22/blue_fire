const { User } = require('../models');

const userData = [
  {
    username: "admin",
    password: "nimda",
    firstname: "Administrator",
    lastname: "Super"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;