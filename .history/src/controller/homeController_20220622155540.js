// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "learn-nodejs",
});

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleCreateUser = (req, res) => {
    let email = req.body.email;
   

  connection.query("SELECT * FROM users", function (err, results, fields) {
    console.log(results); // results contains rows returned by server

  });
  return res.send("abc");
};
module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateUser,
};
