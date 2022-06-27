import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index";
// get the client

// get the promise implementation, we will use bluebird

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);

  try {
    await db.User,.save({
      username:username,
      password:hashPass,
      email:email,
    })
  } catch (error) {
    console.log(error);
  }
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "learn-nodejs",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM user");
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
};
