// Initialize express router
const express = require('express');

const { registerUser , fetchUsersCtrl } = require('../../controllers/User/userCtrl');

const userRouter= express.Router();

userRouter.post('/register',registerUser);
userRouter.get('/', fetchUsersCtrl);
module.exports = userRouter;
