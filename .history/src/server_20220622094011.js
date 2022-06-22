import express from "express"
import configViewEngine from "./configs/viewEngine";



require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;


configViewEngine(app);