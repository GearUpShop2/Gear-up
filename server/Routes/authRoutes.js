const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authorization = require('../middleware/authorize');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logins', authController.login);
router.get('/users', authController.getAllUsers);
router.put('/user/:userId', authController.softDeleteUser);
router.get('/profile',authorization.authorize,authController.getUserProfile);
router.put('/editProfile',authorization.authorize ,authController.editUserProfile);

module.exports = router;
