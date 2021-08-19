const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'teoman',
    password: 'password',
    database: 'employeeTracker_db'
  }
);

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