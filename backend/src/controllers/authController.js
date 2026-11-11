//contains the function that handles that request
const argon2 = require('argon2');
const User = require('../models/user');

const register = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }
        
        const existingUser = await User.findOne({email}); //checks whether the email is already registered 

        if(existingUser){
            return res.status(409).json({
                message: 'Email already registered'
            });
        }

        const passwordHash = await argon2.hash(password); //creates a secure password hash

        const user = await User.create({ //saves the new user in MongoDB
            email,
            passwordHash
        });

        res.status(201).json({ 
            message: 'Registration successful',
            userId: user._id
        });
    }catch(error){
        console.error('Registration error:', error.message);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = { register };