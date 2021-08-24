const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");
const uid = require("../tools/uid");
const dbConfig = require("../db/dbConfig");
const db = mysql.createConnection(dbConfig());


function input() {
    return inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "First Name: "
            
        },
        {
            type: "input",
            name: "last_name",
            message: "First Name: "
            
        },
        {
            type: "list",
            name: "role",
            choices: [
                "Manager",
                "Intern",
                "Technician"
            ]
        },
        {
            type: "list",
            name: "department",
            choices: [
                "Front-end",
                "AI",
                "Database"
            ]
        }
    ])
  }
  
  async function addEmployees() {
    try {
        const test = await input();

        var id = uid()
        var newInsert = {id: id, first_name: test.first_name, last_name: test.last_name, role: test.role, department: test.department};

        db.query("INSERT INTO employees SET ?", newInsert, (err, result) => {});

        console.log("Added", "'"+test.first_name, test.last_name+"'","as","'"+test.role+"'","in","'"+test.department+"'");

        db.query('SELECT * FROM employees', function (err, results) {
            results.forEach(results => {
              tableCreate(results)
            });
          });
          
          function tableCreate(x) {
            console.table(x)
          }
      
          db.end((err) => {});
    }
  
    catch(err) {
        console.log(err);
    }
  }

module.exports = addEmployees;