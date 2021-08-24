const mysql = require('mysql2');
const dbConfig = require("../db/dbConfig");
const db = mysql.createConnection(dbConfig());

var table = "departments";

// db.query(`SELECT * FROM ${table}`, function (err, results) {
//     var output = [];
//     var value;
//     results.forEach(results => {
//         results = results["id"];
//         output.push(results);
//     });
//     value = output.length + 1
//     return value;
// });

function test() {
    db.query(`SELECT * FROM ${table}`, function boom(err, results){
        return results;
    });

    var output = [];
    var value;
    console.log(boom["id"])
    id.forEach(id => {
        id = id["id"];
        output.push(id);
    });
    value = output.length + 1
    return value;
}

test()