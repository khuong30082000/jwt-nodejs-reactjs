import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from 'bluebird';
// get the client
const mysql = require('mysql2/promise');

// get the promise implementation, we will use bluebird


// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'learn-nodejs', Promise: bluebird});


const salt = bcrypt.genSaltSync(10);

const hashUserPassword = userPassword => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);

  connection.query(
    "INSERT INTO users (email,password,username) VALUES (?,?,?)",
    [email, hashPass, username],
    function (err, result, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};
const getUserList = async () => {
  let users = [];
  //    connection.query(
  //     "SELECT * FROM users",
  //     function (err, result, fields) {
  //       if (err) {
  //         console.log(err);
  //         return users;
  //       }
  //       users = result;
  //       return users;
  //     }
  //   );
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
  } catch (error) {
    
  }
  
};

module.exports = {
  createNewUser,
  getUserList,
};
