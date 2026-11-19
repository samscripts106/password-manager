const express = require('express');

const { createPassword } = require('../controllers/passwordController');

const router = express.Router(); //separate router for password-related endpoints 

router.post('/', createPassword); //connects POST req to the controller

module.exports = router;