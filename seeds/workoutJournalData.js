const { workoutJournal } = require('../models');

const workoutJournaldata = [
  {
    exercise_name: 'Walking',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'4',
    exercise_date: new Date()
  },
  {
    exercise_name: 'Running',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'11',
    exercise_date:new Date()
  },
  {
    exercise_name: 'Weight Lifting',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'4',
    exercise_date:new Date()
  },
  {
    exercise_name: 'Yoga',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'6',
    exercise_date:new Date()
  },
  {
    exercise_name: 'Swimming',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'8',
    exercise_date:new Date()
  },
  {
    exercise_name: 'Biking',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'10',
    exercise_date:new Date()
  },
  {
    exercise_name: 'High Intensity Interval Training (HIIT)',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'18',
    exercise_date:new Date()
  },
  {
    exercise_name: 'Pilates',
    exercise_minutes: '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60',
    exercise_calories:'4',
    exercise_date:new Date()
  },
];

const seedworkoutJournal = () => workoutJournal.bulkCreate(workoutJournaldata);

module.exports = seedworkoutJournal;
