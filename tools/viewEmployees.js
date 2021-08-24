const mysql = require('mysql2');
const dbConfig = require("../db/dbConfig");
const db = mysql.createConnection(dbConfig());


function viewEmployees() {
    console.log("Currently in viewEmployees.js");

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

module.exports = viewEmployees;