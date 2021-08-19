const inquirer = require("inquirer");
const table = require("console.table");
const viewDepartments = require("./tools/viewDepartments");


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
        const test = "View all departments";
        // await input();
        if (test.home == "View all departments") {
            console.log("View all departments ~ section")

            viewDepartments()
        }

        else if (test.home == "View all roles") {
            console.log("View all roles ~ section")

            function viewRoles() {

            }
            viewRoles()
        }

        else if (test.home == "View all employees") {
            console.log("View all employees ~ section")

            function viewEmployees() {

            }
            viewEmployees()
        }

        else if (test.home == "Add a department") {
            console.log("Add a department ~ section")

            function addDepartment() {

            }
            addDepartment()
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