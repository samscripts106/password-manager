//contains the function that handles that request
const argon2 = require('argon2');
const User = require('../models/user');

//New user registration
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

//Login for an exisiting user
const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        const user = await User.findOne({email}); //searches the users collection

        if(!user){
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const isPasswordValid = await argon2.verify(
            user.passwordHash, //previously stored hash from mongoDB
            password //password entered by the user
        );

        if(!isPasswordValid){ //rejecting incorrect password 
            return res.status(401).json({
                message: 'Invalid email or password'
            })
        }

        res.status(200).json({
            message: 'Login successful',
            userId: user._id
        });
    } catch (error){
        console.error('Login error:', error.message);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = { register,login };