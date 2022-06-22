import express from "express";

const router = express.Router();


const innitWebRoutes = (app) => {
    router.get("/",(req,res) => {
        return res.send("Hello World")
    })
}