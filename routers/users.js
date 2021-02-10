const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);


module.exports = router;