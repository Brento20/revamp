const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    //Get all Projects and JOIN with User data

    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    //Get single Project and JOIN with User data

    res.render('project', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create New Project
router.get('/project/1/add_tip', async (req, res) => {
  try {
    res.render('profile', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    //Find the logged in User based on the session ID and JOIN with Project
    res.render('profile', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  //If the user is already logged in, redirect the request to another route
  res.render('login');
});

module.exports = router;
