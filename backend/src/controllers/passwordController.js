const Password = require('../models/password');

//Create a new password entry
const createPassword  = async (req,res) => {
    try{
        const { website, username, password } = req.body; 

        if(!website || !username || !password){
            return res.status(400).json({
                message: 'Website, username & password are required'
            });
        }

        const newPassword = await Password.create({
            user: req.session.userId,
            website,
            username,
            password
        });

        res.status(201).json({
            message: 'Passwod saved successfully',
            passwordId: newPassword._id
        });
    }catch (error){
        console.error('Create password error:', error.message);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

//Retrieve saved passwords (Find all pw docs whose user field matches the ID of the currently logged-in user)
const getPasswords = async (req,res) => {
    try{
        const passwords = await Password.find({ //returns an array of pws
            user: req.session.userId //identifies the current logged in user
        });

        res.status(200).json({
            passwords
        });
    }catch (error){
        console.error('Get passwords error:', error.message);

        res.status(500).json({
            message: 'Internal Server error'
        });
    }
};

module.exports = { createPassword, getPasswords };