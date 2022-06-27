// get the client
import mysql  from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'learn-nodejs'
});




const handleHelloWorld = (req,res) => {
    return res.render("home.ejs");
}
const handleUserPage = (req,res) => {
    return res.render("user.ejs");
}
const handleCreateUser = (req,res) => {
    connection.query(
        'SELECT * FROM user WHERE `name` = "Page" AND `age` > 45',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
    return res.send('abc')
}
module.exports ={
    handleHelloWorld,
    handleUserPage,
    handleCreateUser
    
}