import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();


const innitWebRoutes = (app) => {
    router.get("/",homeController.handleHelloWorld);
    router.get("/user",homeController.handleUserPage);
    router.get("/users-create",homeController.handleCreateUser);
    return app.use("/",router)

}
export default innitWebRoutes