DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;
DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL
);
INSERT INTO departments (id, name)
    VALUES (1, "TestDepartment");
INSERT INTO roles (id, name)
    VALUES (1, "TestRole");
INSERT INTO employees (id, first_name, last_name)
    VALUES (1, "Bob", "Lowe");