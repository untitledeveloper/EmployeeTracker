const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table")
const dbConfig = require("./db/dbConfig");
const db = mysql.createConnection(dbConfig());


function input() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of new department? "
            
        }
    ])
  }
  
  async function addDepartments() {
    try {
        const test = await input();

        var id = 2
        var newInsert = {id: id, name: test.name};

        db.query("INSERT INTO departments SET ?", newInsert, (err, result) => {});

        console.log("Added", "'"+test.name+"'","to list of departments");

        db.query('SELECT * FROM departments', function (err, results) {
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

module.exports = addDepartments;