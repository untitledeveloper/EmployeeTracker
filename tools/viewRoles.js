const mysql = require('mysql2');
const dbConfig = require("../db/dbConfig");
const db = mysql.createConnection(dbConfig());


function viewRoles() {
    console.log("Currently in viewRoles.js");

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

module.exports = viewRoles;