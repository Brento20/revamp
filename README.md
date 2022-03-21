
# REvamp Ver 1.0

![alt text](./public/assets/images/banner.jpg) <br><br>
![alt text](./public/assets/images/sample_paint.jpg) <br>
![alt text](./public/assets/images/query.jpg)

Link: https://revampyourlife.herokuapp.com/<br>
Repo: https://github.com/Brento20/revamp<br>
Support: https://nodemailer.com/about/ <br><br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
[Project Description](#project-description)

[User Story](#User)

[Initial Concept](#initial-concept)

[File Structure](#file-structure)

[Usage](#file-structure)

[Future Development](#future-development)

<br><br>

## Project Description

REvamp is a web application designed to help empower people to repair, restore and improve the items in our lives that society has told us have become disposable.

Our users can see DIY projects by category that give them inspiration for their own life as well as contributing DIY instructions.

Developed in collaboration with:

Miguel Afable, Mona Mahmoud and Brenton Weaver.

<br>



## User Story
>
>**When I** arrive on the homepage, I can click on categories for DIY projects.
>
>**Then** I can click on the category, I'm shown a page with summaries of each project available.
>
>**When I** click a project, I see the full method of how to complete the DIY.
>
>**When I** click log in, I can log in or sign up to the site.
>
>**When I** am logged in, I can create DIY projects and post them with tags to categorize them.
>
>**When I** have posted a DIY project, I receive an email notifying me my project has been added to the site database.

 <br>
 <br>



## Initial Concept


<br>![wire-frame](./public/assets/images/wireframe.jpg)<br>

The title header is consistent for all pages.

The homepage presents an overall description of the site and its purpose.  

The navbar buttons are for different sub-topics, and a login button.

Navbar sub-topic button navigate to their respective pages, with seeded preview projects. 

The login button leads to a signup/login page. 
Logging in will permit the user to add projects to the site. <br><br>



## File Structure

### Model-View-Controller

#### Model 
Initial site data seeds, which consists of instructions/images for main sub-topics.
MySQL generates the initial database, and Sequelize for seeding and modifying seeds.   

### View
HTML templates via Handlebars. Three template types: Main, login, and sub-topic. 
Additional styling with CSS/Bootstrap. 

### Controller
Routing via Express JS. Routes via a home routes file and a user file. 
Home routes direct website navigation between main page and sub-topics.  
User routes handle login/logout access, additional login privileges (adding projects), and email functionality.  <br><br>

## Deployment (Backend) via Visual Studio
### Preliminary NPM Install
Express js, Sequelize, MySQL2, dotenv, nodemailer

### Deployment
1. Open MYSQL from root. Run command 'source db/schema.sql;' to initiate database. 

2. From root, run command 'node seeds/index.js to seed database. 

3. From root, run command 'node server.js' to launch site on localhost:3001. <br><br>



## Usage

The homepage will show a description with a navbar. The 'Home' navbar button redirects to this page. 

The 'login' button at the end of the navbar will allow the user to sign up or login. 

If the user logs in, he/she will be directed to page for adding tips. The user can then
add a project with options for Title, Instruction, Image URL, Difficulty, and Category.
After adding the project, a submit button appears. Upon clicking the submit button, 
the user is notified that the project has been successfully submitted, and an email has 
sent to them regarding this. 

Clicking on 'Electrical', 'Plumbing', 'Woodworking', 'Botany' or 'Painting' will redirect the user
to that sub-topic page. If the user is logged in, he/she will receive an option to add a new
project at the bottom of each page.  

Each sub-topic will display two seeded projects with an image, any projects added, and project instructions. <br><br>

## Future Development

1. Social media integration: sharing, liking, and commenting. 
2. Indexing and PDF creation. 
3. Advertisement opportunities.



<!-- | Task | Status |
|--|--|
| Must use Node.js and Express.js to create a RESTful API | Complete |
| Must use Handlebars.js as the template engine |  |
| Must use MySQL and the Sequelize ORM for the database | |
| Must have both GET and POST routes for retrieving and adding new data | |
| Must use at least one new library, package, or technology that we haven’t discussed |  |
| Must have a folder structure that meets the MVC paradigm |  |
| Must include authentication (express-session and cookies) ||
| Must protect API keys and sensitive information with environment variables|| -->

<!-- HTML, [CSS stylesheet planning],javaScript. -->

<!-- ## Basic Mobile Wire-frame: -->

<!-- ## Style Guide:
![chicken]() -->

<!-- 1. Use box structure and bootstrap. (David gave us the all clear to use bootstrap)

2. Create easily readable code

3. Include notes - We created a style guide for how we wanted to write and each of the included javascript file will include a table of contents and notations within functions to help the graders/ anyone looking into our code.

  

# 4. CSS stylesheet planing

  

1. Multiple style sheets (styleGuide.css, style.css and a reset.css)

2. Started with a mobile first approach to our work.

3. Add external font sheet (google fonts ect)

4. Create custom handlebars 
 -->


<!-- # 5. JavaScript.

1. 

2. 

3. 

<br>
<br>

# 6. File structure.

1.  -->