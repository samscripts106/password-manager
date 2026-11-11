//authRoutes defines an endpoint
const express = require('express');
const {register} = require('../controllers/authController');

const router = express.Router(); //creates a separate modular router to group related endpoints 

router.post('/register', register); //conects the post req endpoint to the controller function

module.exports = router;

