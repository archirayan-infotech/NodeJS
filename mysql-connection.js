
//mysql connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : '15'
});
connection.connect();
connection.query('show databases ', function (error, results, fields) {
  if (error) throw error;
   for(var i=0;i<result.length;i++){
   console.log(result[0]);
   }
   
 });
 connection.end();
