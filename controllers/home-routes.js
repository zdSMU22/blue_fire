const router = require('express').Router();
const { workoutJournal, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all exercises for homepage
router.get('/', async (req, res) => {
  try {
    const dbworkoutJournalData = await workoutJournal.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const exercises = dbworkoutJournalData.map((workoutJournal) =>
      workoutJournal.get({ plain: true })
    );

    res.render('homepage', {
      exercises,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one workoutJournal
// Use the custom middleware before allowing the user to access the workoutJournal
router.get('/workoutJournal/:id', withAuth, async (req, res) => {
  try {
    const dbworkoutJournalData = await workoutJournal.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
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


// Leaving this here for the other pages

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
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
