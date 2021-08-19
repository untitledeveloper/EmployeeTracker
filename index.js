const inquirer = require("inquirer");
const table = require("console.table");
const viewDepartments = require("./tools/viewDepartments");
const viewRoles = require("./tools/viewRoles");
const viewEmployees = require("./tools/viewEmployees");
const addDepartments = require("./tools/addDepartments");

function input(){
    return inquirer.prompt([
        {
            type: "list",
            name: "home",
            choices: [
                "View all departments",
                "View all roles", 
                "View all employees", 
                "Add a department", 
                "Add a role", 
                "Add an employee", 
                "Update an employee role"
            ]
        }
    ]);
} 

async function init() {
    try {
        const test = await input();
        if (test.home == "View all departments") {
            viewDepartments()
        }

        else if (test.home == "View all roles") {
            viewRoles()
        }

        else if (test.home == "View all employees") {
            viewEmployees()
        }

        else if (test.home == "Add a department") {
            addDepartments()
        }

        else if (test.home == "Add a role") {
            console.log("Add a role ~ section")

            function addRole() {

            }
            addRole()
        }

        else if (test.home == "Add an employee") {
            console.log("Add an employee ~ section")

            function addEmployee() {

            }
            addEmployee()
        }

        else if (test.home == "Update an employee role") {
            console.log("Update an employee role ~ section")

            function updateEmployeeRole() {

            }
            updateEmployeeRole()
        }

        else {
            console.log("error")
        }

    }   catch(err) {
        console.log(err);
    }
  }

  init();