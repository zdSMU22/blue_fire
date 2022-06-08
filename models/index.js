const User = require('./User');
const workoutJournal = require('./workoutJournal');
const Painting = require('./Painting');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, workoutJournal, Painting };
