const mysql = require('mysql2');
const table = require("console.table");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'teoman',
    password: 'password',
    database: 'employeeTracker_db'
  }
);

var newInsert = {id: 4, name: "TestDepartment4"};

db.query("INSERT INTO departments SET ?", newInsert, (err, result) => {
});

// var test = []

// db.query('SELECT * FROM departments', function (err, results) {
//   results.forEach(results => {
//     tableB(results)
//   });
// });

// function tableB(x) {
//   // var table = []
//   // table.push({
//   //   id: x["id"],
//   //   name: x["name"],
//   // })
//   console.table(x)
// }

// var someVar = [];

// db.query('SELECT * FROM departments', function(err, rows){
//   if(err) {
//     throw err;
//   } else {
//     setValue(rows);
//   }
// });

// function setValue(value) {
//   someVar = value;
//   console.log(someVar[0]["id"]);
// }
// db.query('SELECT * FROM roles', function (err, results) {
//     console.log("roles:", results);
// });

// db.query('SELECT * FROM employees', function (err, results) {
//     console.log("employees:", results);
// });