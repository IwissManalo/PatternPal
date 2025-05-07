const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authenticationController = require('../controllers/authentication');

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);

// New routes for OTP signup flow
router.post('/signup/send-otp', authenticationController.createAndSendOTPWithUser);
router.post('/signup/verify-otp', authenticationController.verifyOTPAndRegister);

module.exports = router;
