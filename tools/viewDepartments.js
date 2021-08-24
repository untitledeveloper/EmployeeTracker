const mysql = require('mysql2');
const dbConfig = require("../db/dbConfig");
const db = mysql.createConnection(dbConfig());


function viewDepartments() {
    console.log("Currently in viewDepartments.js");

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

module.exports = viewDepartments;