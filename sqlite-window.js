var sqlite = require("sqlite3");
var file="D:/software/sqllite/example.sqlite";// you can change file name and path for your sqlite database
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);
db.all("SELECT id, name   FROM employee", function(err, employee){
    if(err !== null){
        console.log(err);
    }
    else{
        console.log(employee);
    }
});
