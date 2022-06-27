import userService from "../server/userService.js"



const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  return res.send("abc");
};
module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateUser,
};
