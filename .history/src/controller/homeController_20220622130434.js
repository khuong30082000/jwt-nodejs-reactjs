const handleHelloWorld = (req,res) => {
    return res.render("home.ejs");
}
const handleUserPage = (req,res) => {
    return res.render("user.ejs");
}
const handleCreateUser = (req,res) => {
    // console.log(req.body);
    return res.send('abc')
}
module.exports ={
    handleHelloWorld,
    handleUserPage,
    handleCreateUser
    
}