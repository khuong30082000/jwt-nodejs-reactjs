import userService from "../service/userService";



const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
   let userList = userService.getUserList();
   console.log('userList',userList);
  return res.render("user.ejs");
};
const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;
//   userService.createNewUser(email,password,username)

  return res.send("abc");
};
module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateUser,
};
