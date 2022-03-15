const router = require('express').Router();
const Project = require('../models/Project');

//Navigate to Homepage
router.get('/', async(req, res) => {
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


//Navigate to Painting 
router.get('/project/1', async(req, res) => {
    try {
        // const project = projectData.get({ plain: true });
        res.render('painting', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to Woodworking
router.get('/project/2', async(req, res) => {
    try {
        res.render('woodworking', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to Plumbing
router.get('/project/3', async(req, res) => {
    try {
        //fetch project with id from database 
        //project findbypk or id
        const projectData = await Project.findAll({ where: { category: "Plumbing" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        // projectData.get({ plain: true });
        //post route: add category before adding...
        res.render('plumbing', {
            logged_in: req.session.logged_in,
            projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// const dishes = dishData.map((dish) => dish.get({ plain: true }));


//Navigate to Electrical
router.get('/project/4', async(req, res) => {
    try {
        res.render('electrical', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to Botany
router.get('/project/5', async(req, res) => {
    try {
        // projectData.get({ plain: true });
        res.render('botany', {
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to SummaryCard
router.get('/project/s', async(req, res) => {
    try {
        // projectData.get({ plain: true });
        res.render('summarycard', {
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//Create New Project
router.get('/project/:id/add_tip', async(req, res) => {
    try {
        res.render('profile', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Use withAuth middleware to prevent access to route
router.get('/profile', async(req, res) => {
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



// route to create/add a project using async/await
router.post('/project/add', async(req, res) => {
    try {
        const projectData = await Dish.create({
            issue: req.body.issue,
            instructions: req.body.instructions,
            imgURL: req.body.imgURL,
            difficulty: req.body.difficulty,
            category: req.body.category
        });
        //should send confirmation email here
        // if the project is successfully created, the new response will be returned as json
        res.status(200).json(projectData)
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router;

//Navigate to Category
// router.get('/project/:id', async (req, res) => {
//   try {
//     if (id)
//     // const project = projectData.get({ plain: true });
//     res.render('plumbing', {
//       logged_in: req.session.logged_in
//     });

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });