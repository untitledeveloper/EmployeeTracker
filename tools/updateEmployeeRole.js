const mysql = require('mysql2');
const dbConfig = require("../db/dbConfig");
const inquirer = require("inquirer");
const db = mysql.createConnection(dbConfig());


function updateEmployeeRoles() {
    var roles = [];

    db.query('SELECT * FROM roles', function (err, results) {
        results.forEach(results => {
          view(results["name"])
        });
      });
      
      function view(x) {
        return roles.push(x)
      }

    db.query("SELECT * FROM employees", async (err, employee) => {
        
        const {
            worker,
            newrole
        } = await inquirer.prompt([{
                type: "list",
                message: "Choose an employee to update:",
                name: "worker",
                choices: () => {
                    return employee.map((employee) => employee.first_name);
                },
            },
            {
                type: "list",
                message: "What is this employee's new role?",
                name: "newrole",
                choices: () => {
                    return roles;
                }
            }
        ]);
        db.query(
            "UPDATE employees SET ? WHERE ?",
            [{
                    role: newrole,
                },
                {
                    first_name: worker,
                },
            ],
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " products updated!\n");
                
                console.table(employee);
            }
        );
    })
}

module.exports = updateEmployeeRoles;