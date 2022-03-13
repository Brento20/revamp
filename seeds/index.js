const sequelize = require('../config/connection');
const Project = require('../models/Project');
// const { User, Project } = require('../models/Project');
// const userData = require('./userData.json');
// const projectData = require('./projectData.json');
const projectData = require('./seeds.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
