import userService from "../service/userService";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();

  return res.render("user.ejs",{userList});
};
const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
    userService.createNewUser(email,password,username)
  res.redirect("/user")
};
module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateUser,
};
