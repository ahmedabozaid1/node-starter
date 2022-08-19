const jwt = require('jsonwebtoken');
const userServ = require('./UserService');
const bcrypt = require("bcrypt")

exports.signIn = async (user) => {
  const userFromDB = await userServ.getUserByUsername(user.username);
  if (!userFromDB) {
    return false
  }
  const isPasswordCorrect = await bcrypt.compare(user.password, userFromDB.password);
  if (!isPasswordCorrect) {
    return false
  }
  const token = jwt.sign({ user }, process.env.TOKEN_SECRET);
  return token;
};

exports.signUp = async (user) => {
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  const newUser = await userServ.addUser(user);
  return newUser;
}