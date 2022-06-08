const sequelize = require('../config/connection');
const seedworkoutJournal = require('./workoutJournalData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedworkoutJournal();

  await seedPaintings();

  process.exit(0);
};

seedAll();
