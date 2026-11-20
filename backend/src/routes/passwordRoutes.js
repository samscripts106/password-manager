const express = require('express');
const requireAuth = require('../middleware/authMiddleware.js')

const { createPassword,getPasswords,updatePassword } = require('../controllers/passwordController');

const router = express.Router(); //separate router for password-related endpoints 

//requireAuth runs first. If the authentication succeeds, next() passes control to createPassword or getPassword
//Our middleware blocks reqs without a valid login session
router.post('/', requireAuth, createPassword); //creates a new password card (connects POST req to the controller)
router.get('/', requireAuth, getPasswords); //retrieve the saved passwords
router.put('/:id', requireAuth, updatePassword); // /:id means the URL accepts a dynamic ID 
// PUT http://localhost:5001/api/passwords/674abc123 express extracts 674abc123 into req.params.id

module.exports = router;