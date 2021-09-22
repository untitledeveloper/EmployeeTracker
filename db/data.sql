DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;
DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  id VARCHAR(4) NOT NULL,
  name VARCHAR(100) NOT NULL
);
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id VARCHAR(4) NOT NULL,
  name VARCHAR(100) NOT NULL
);
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id VARCHAR(4) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL
);
INSERT INTO departments (id, name)
    VALUES ("8448", "Front-end");
INSERT INTO departments (id, name)
    VALUES ("3124", "AI");
INSERT INTO departments (id, name)
    VALUES ("df56", "Database");
INSERT INTO roles (id, name)
    VALUES ("bf37", "Manager");
INSERT INTO roles (id, name)
    VALUES ("7adf", "Intern");
INSERT INTO roles (id, name)
    VALUES ("feda", "Technician");
INSERT INTO employees (id, first_name, last_name, role, department)
    VALUES ("4ac5", "Bob", "Lowe", "Intern", "Database");
INSERT INTO employees (id, first_name, last_name, role, department)
    VALUES ("6b23", "Dan", "Lowe", "Manager", "AI");