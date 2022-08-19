const asyncHandler = require('express-async-handler');
const authService = require('../services/AuthService');

exports.signin = asyncHandler(async (req, res) => {
  const user  = req.body.user;
  const token = await authService.signIn(user);
  if(!token) {
    return res.status(401).json("Invalid username or password");
  }
  res.status(200).json({ token });  
});

exports.signup = asyncHandler(async (req, res) => {
  const user  = req.body.user;
  const userData = await authService.signUp(user);
  if(!userData) {
    return res.status(401).json("something went wrong");
  }
  res.status(200).json({ userData });  
});
