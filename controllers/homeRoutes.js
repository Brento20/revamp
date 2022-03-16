const router = require('express').Router();
const Project = require('../models/Project');
const User = require('../models/User');
const nodemailer = require('nodemailer');

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


// route to create/add a project
router.post('/add_tip', async(req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            //user_id: req.session.user_id,
        });

        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true });

        console.log(user.email);

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com', // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: 'revampyourlife@outlook.com.au', // generated ethereal user
                pass: 'nodemailer1234' // generated ethereal password
            },
        });

        // prepare mail options
        var mailOptions = {
            from: 'revampyourlife@outlook.com.au',
            to: user.email,
            subject: 'Your Project Has Been Successfully Added!',
            text: 'We are delighted to inform you that your project has been added to our database!',
            html: '<h1>We are delighted to inform you that your project has been added to our database!</h1>'
        };

        //send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log("sending email error " + error);
                res.status(400).json(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json(newProject);
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


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