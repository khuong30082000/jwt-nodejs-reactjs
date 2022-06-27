const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("learn-nodejs", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const connection = () => {};
