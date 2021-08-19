const mysql = require('mysql2');
const table = require("console.table");
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'teoman',
    password: 'password',
    database: 'employeeTracker_db'
  }
);

function input() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            meaasge: "Name of new department? "
        }
    ])
}

function addDepartments() {
    var newInsert = {};

    db.query("INSERT INTO departments SET ?", newInsert, (err, result) => {});
}

module.exports = addDepartments;