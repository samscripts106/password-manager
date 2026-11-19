const express = require('express');

const { createPassword,getPasswords } = require('../controllers/passwordController');

const router = express.Router(); //separate router for password-related endpoints 

router.post('/', createPassword); //creates a new password card (connects POST req to the controller)
router.get('/', getPasswords); //retrieve the saved passwords

module.exports = router;