const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'teoman',
    password: 'password',
    database: 'employeeTracker_db'
  }
);

function viewDepartments() {
    console.log("Currently in viewDepartments.js");

    db.query('SELECT * FROM departments', function (err, results) {
      results.forEach(results => {
        tableCreate(results)
      });
    });
    
    function tableCreate(x) {
      // var table = []
      // table.push({
      //   id: x["id"],
      //   name: x["name"],
      // })
      console.table(x)
    }

    db.end((err) => {});
    
}

module.exports = viewDepartments;