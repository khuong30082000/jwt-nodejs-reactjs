import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword,salt);
    return hashPassword;
}

const createNewUser =(email,password,username) => {

}