CREATE DATABASE `cake_app`;

CREATE USER IF NOT EXISTS 'cake_usr'@'%' IDENTIFIED BY 'cake_pw';

GRANT ALL ON `cake_app`.* TO 'cake_usr'@'%';
