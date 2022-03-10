DROP DATABASE IF EXISTS DIY_db;

CREATE DATABASE DIY_db;

USE DIY_db;

-- CREATE TABLE category (
--   -- Creates a numeric column called "id" which cannot contain null --
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   -- Makes a string column called "name" which cannot contain null --
--   name VARCHAR(30) NOT NULL
-- );


-- CREATE TABLE project (
--   -- Creates a numeric column called "id" which cannot contain null --
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   -- Makes a string column called "name" which cannot contain null --
--   title VARCHAR(30),
--   summary VARCHAR(30),
--   steps VARCHAR(300),
--   img_URL VARCHAR(100),
--   difficulty VARCHAR(30),
--   category_id INT,
--   FOREIGN KEY (category_id)
--   REFERENCES category(id)
--   ON DELETE SET NULL
-- );


