const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table")
const uid = require("../tools/uid");
const dbConfig = require("../db/dbConfig");
const db = mysql.createConnection(dbConfig());


function input() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of new role? "
            
        }
    ])
  }
  
  async function addRoles() {
    try {
        const test = await input();

        var id = uid()
        var newInsert = {id: id, name: test.name};

        db.query("INSERT INTO roles SET ?", newInsert, (err, result) => {});

        console.log("Added", "'"+test.name+"'","to list of roles");

        db.query('SELECT * FROM roles', function (err, results) {
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

module.exports = addRoles;