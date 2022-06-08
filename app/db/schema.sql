DROP DATABASE IF EXISTS bleufire_db;
CREATE DATABASE bleufire_db;

USE bleufire_db;

CREATE TABLE userinfo (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  FirstName VARCHAR(30) NOT NULL,
  LastName VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  passwd VARCHAR(30) NOT NULL,
);

-- Should I create table categories? Is that needed? Do I set seeds seing that we will be getting that information from user input?