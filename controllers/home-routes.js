const router = require('express').Router();
const { workoutJournal } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all exercises for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbworkoutJournalData = await workoutJournal.findAll({
//       include: [
//         {
//           model: workoutjournal,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const exercises = dbworkoutJournalData.map((workoutJournal) =>
//       workoutJournal.get({ plain: true })
//     );

//     res.render('homepage', {
//       exercises,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET workoutJournal
// Use the custom middleware before allowing the user to access the workoutJournal
router.get('/workoutJournal', withAuth, async (req, res) => {
  try {
    const dbworkoutJournalData = await workoutJournal.findByPk(req.params.id, {
      include: [
        {
          model: WorkoutJournal,
          attributes: [
            'id',
            'exercise_name',
            'exercise_minutes',
            'exercise_calories',
            'exercise_date:',
            'total_calories',
          ],
        },
      ],
    });

    const workoutJournal = dbworkoutJournalData.get({ plain: true });
    res.render('workoutJournal', { workoutJournal, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
