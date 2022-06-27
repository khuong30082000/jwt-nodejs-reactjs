import express from "express";
import configViewEngine from "./config/viewEngine";
import innitWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();
import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//test connection
connection();

//init web Routes
innitWebRoutes(app);

app.listen(PORT, () => {
  console.log("localhost =" + PORT);
});
