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

        console.log("Connected database:", User.db.name);
        console.log("Found user:", user);

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

        req.session.userId = user._id.toString(); //req.session accesses the current user's sessionand userId stores that user's MongoDB ID inside the session

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

//Get currently logged-in user
const getCurrentUser = async (req,res) =>{
    try{
        if(!req.session.userId){
            return res.status(401).json({
                message: 'Not authenticated'
            });
        }

        const user = await User.findById(req.session.userId).select('-passwordHash'); //passwordHash is not included in the response 
        
        if(!user){
            return res.status(401).json({
                message: 'User not found'
            })
        }

        res.status(200).json({
            user
        });
    } catch (error){
        console.error ('Get current user error:', error.message);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
};


//Logout for a logged in user
const logout = (req, res) =>{
    req.session.destroy((err)=>{ // destroys the current session stored in mongoDB
        if(err){
            return res.status(500).json({
                message: 'Logout failed'
            });
        }

        res.clearCookie('connect.sid'); // removes the sesson cookie from the browser

        res.status(200).json({
            message: 'Logout successfull'
        });
    });
};

module.exports = { register,login, logout, getCurrentUser };