const router = require('express').Router();
const Project = require('../models/Project');

//Navigate to Homepage
router.get('/', async(req, res) => {
    try {
        const projectData = await Project.findAll({ where: { category: "Woodworking" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('homepage', {
            logged_in: req.session.logged_in,
            projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


//Navigate to Painting 
router.get('/project/painting', async(req, res) => {
    try {
        const projectData = await Project.findAll({ where: { category: "Painting" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('painting', {
            logged_in: req.session.logged_in,
            projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to Woodworking
router.get('/project/woodworking', async(req, res) => {
    try {
        const projectData = await Project.findAll({ where: { category: "Woodworking" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('woodworking', {
            logged_in: req.session.logged_in,
            projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to Plumbing
router.get('/project/plumbing', async(req, res) => {
    try {
        const projectData = await Project.findAll({ where: { category: "Plumbing" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('plumbing', {
            logged_in: req.session.logged_in,
            projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


//Navigate to Electrical
router.get('/project/electrical', async(req, res) => {
    try {
        const projectData = await Project.findAll({ where: { category: "Electrical" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('electrical', {
            logged_in: req.session.logged_in,
            projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Navigate to Botany
router.get('/project/botany', async(req, res) => {
    try {
        const projectData = await Project.findAll({ where: { category: "Botany" } })
        const projects = projectData.map((project) => project.get({ plain: true }));
        res.render('botany', {
            logged_in: req.session.logged_in,
            projects
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

//Create New Project
// route to create/add a project
router.post('/add_tip', async(req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            // user_id: req.session.user_id,
        });
        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

// try {

//     res.render('profile', {
//         logged_in: req.session.logged_in
//     });

//     const dishData = await Dish.create({
//         dish_name: req.body.dish_name,
//         description: req.body.description,

//         guest_name: req.body.guest_name,
//         has_nuts: req.body.has_nuts,
//     });
//     res.status(200).json(dishData);
// } catch (err) {
//     res.status(400).json(err);
// }



//Use withAuth middleware to prevent access to route
router.get('/profile', async(req, res) => {
    try {
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