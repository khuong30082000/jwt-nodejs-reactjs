import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();

const innitWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.handleUserPage);
  router.post("/user/create-user", homeController.handleCreateUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/update-user/:id", homeController.handleUpdateUser);
  router.post("/user/update-user", homeController.handleButtonUpdate);
  return app.use("/", router);
};
export default innitWebRoutes;
