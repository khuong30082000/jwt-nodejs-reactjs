import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser =(email,password,username) => {
    let hashPass = hashUserPassword(password);

}