import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
// get the client

// get the promise implementation, we will use bluebird

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = userPassword => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "learn-nodejs",
        Promise: bluebird,
    });
  let hashPass = hashUserPassword(password);


  try {
    const [rows, fields] = await connection.execute("INSERT INTO users (email,password,username) VALUES (?,?,?)",[email, hashPass, username]);
    return rows;
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
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
};
