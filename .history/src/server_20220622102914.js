import express from "express";
import configViewEngine from "./configs/viewEngine";
import innitWebRoutes from "./routes/web";



// require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);


//init web Routes
innitWebRoutes(app);

app.listen(PORT,() => {
    console.log('localhost =' + PORT);
})