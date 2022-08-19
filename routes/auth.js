const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();

router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);
module.exports = router;