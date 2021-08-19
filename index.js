const inquirer = require("inquirer");

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
            console.log("View all departments ~ section")

            function vadChoice() {

            }
            vadChoice()
        }

        else if (test.home == "View all roles") {
            console.log("View all roles ~ section")

            function varChoice() {

            }
            varChoice()
        }

        else if (test.home == "View all employees") {
            console.log("View all employees ~ section")

            function valChoice() {

            }
            valChoice()
        }

        else if (test.home == "Add a department") {
            console.log("Add a department ~ section")

            function aadChoice() {

            }
            aadChoice()
        }

        else if (test.home == "Add a role") {
            console.log("Add a role ~ section")

            function aarChoice() {

            }
            aarChoice()
        }

        else if (test.home == "Add an employee") {
            console.log("Add an employee ~ section")

            function aaeChoice() {

            }
            aaeChoice()
        }

        else if (test.home == "Update an employee role") {
            console.log("Update an employee role ~ section")

            function uaerChoice() {

            }
            uaerChoice()
        }

        else {
            console.log("error")
        }

    }   catch(err) {
        console.log(err);
    }
  }

  init();  