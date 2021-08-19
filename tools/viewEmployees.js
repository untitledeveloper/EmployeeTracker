const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'teoman',
    password: 'password',
    database: 'employeeTracker_db'
  }
);

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