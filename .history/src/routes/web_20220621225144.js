import express from "express";

const router = express.Router();


const innitWebRoutes = () => {
    router.get("/",(req,res) => {
        return res.send("Hello World")
    })
}