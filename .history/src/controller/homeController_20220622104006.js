const handleHelloWorld = (req,res) => {
    const name = "Khuong"
    return res.render("home.ejs");
}
module.exports ={
    handleHelloWorld
}