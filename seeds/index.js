const sequelize = require('../config/connection');
const Project = require('../models/Project');
const projectData = require('./seeds.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
