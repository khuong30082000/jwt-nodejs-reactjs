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
    console.log(req.body);
    return res.send('abc')
}
module.exports ={
    handleHelloWorld,
    handleUserPage,
    handleCreateUser
    
}