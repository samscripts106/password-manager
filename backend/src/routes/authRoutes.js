//authRoutes defines an endpoint
const express = require('express');
const {register, login, logout, getCurrentUser} = require('../controllers/authController');

const router = express.Router(); //creates a separate modular router to group related endpoints 

//Eg: (POST) http://localhost:5001/api/auth/login base mounting of authentication routes is done on /api/auth

router.post('/register', register); //conects the /register endpoint to register function
router.post('/login', login); //conects the /login endpoint to login function
router.post('/logout', logout); //connects the /logout endpoint to logout function
router.get('/me', getCurrentUser) //connects the /me endpoiint to the getCurrentUser function

module.exports = router;

