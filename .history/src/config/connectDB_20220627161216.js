const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("learn-nodejs", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
