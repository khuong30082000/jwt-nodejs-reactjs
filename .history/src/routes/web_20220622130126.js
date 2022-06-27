import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();


const innitWebRoutes = (app) => {
    router.get("/",homeController.handleHelloWorld);
    router.get("/user",homeController.handleUserPage);
    router.get("/user-create",homeController.handleUser);
    return app.use("/",router)

}
export default innitWebRoutes