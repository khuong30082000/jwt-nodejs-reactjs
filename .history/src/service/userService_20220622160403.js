import bcrypt from "bcryptjs";
import mysql from "mysql2";

const salt = bcrypt.genSaltSync(10);
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "learn-nodejs",
});

const hashUserPassword = userPassword => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);

  connection.query(
    "INSERT INTO users (email,password,username) VALUES (?,?,?)",
    [email, password, username],
    function (err, result, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};


module.exports = {
    createNewUser
}
