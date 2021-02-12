const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.post('/user/login', userController.postLogin);

router.post('/user/register', userController.postRegister);


module.exports = router;