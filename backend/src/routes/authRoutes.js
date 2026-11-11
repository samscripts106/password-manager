//authRoutes defines an endpoint
const express = require('express');
const {register, login} = require('../controllers/authController');

const router = express.Router(); //creates a separate modular router to group related endpoints 

router.post('/register', register); //conects the /register endpoint to register function
router.post('/login', login); //conects the /login endpoint to login function

module.exports = router;

