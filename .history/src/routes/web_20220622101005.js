import express from "express";

const router = express.Router();


const innitWebRoutes = (app) => {
    router.get("/",handleHelloWorld)
    return app.use("/",router)

}
export default innitWebRoutes