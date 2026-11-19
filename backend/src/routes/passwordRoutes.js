const express = require('express');
const requireAuth = require('../middleware/authMiddleware.js')

const { createPassword,getPasswords } = require('../controllers/passwordController');

const router = express.Router(); //separate router for password-related endpoints 

//requireAuth runs first. If the authentication succeeds, next() passes control to createPassword or getPassword
//Our middleware blocks reqs without a valid login session
router.post('/', requireAuth, createPassword); //creates a new password card (connects POST req to the controller)
router.get('/', requireAuth, getPasswords); //retrieve the saved passwords

module.exports = router;