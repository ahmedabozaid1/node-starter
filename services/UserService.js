const jwt = require('jsonwebtoken');
const userRepo = require('../repositories/UserRepository');


exports.getUserByUsername = async (username) => {
   return await userRepo.getByUsername(username);
  
};

exports.addUser = async (user) => {
    return await userRepo.add(user);
}