const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("learn-nodejs", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
