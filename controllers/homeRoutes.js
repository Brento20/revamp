const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // TODO: Get all Projects and JOIN with User data

    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    // TODO: Get single Project and JOIN with User data

    res.render('project', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    // TODO: Find the logged in User based on the session ID and JOIN with Project

    res.render('profile', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // TODO: If the user is already logged in, redirect the request to another route

  res.render('login');
});

module.exports = router;
