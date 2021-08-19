const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'teoman',
    // MySQL password
    password: 'password',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

// Query database
db.query('SELECT * FROM departments', function (err, results) {
    console.log("departments:", results);
});

db.query('SELECT * FROM roles', function (err, results) {
    console.log("roles:", results);
});

db.query('SELECT * FROM employees', function (err, results) {
    console.log("employees:", results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
