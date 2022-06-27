import bcrypt from 'bcryptjs';
import mysql from "mysql2";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser =(email,password,username) => {
    let hashPass = hashUserPassword(password);
    connection.query("SELECT * FROM users", function (err, results, fields) {
        console.log(results); // results contains rows returned by server
    
      });

}