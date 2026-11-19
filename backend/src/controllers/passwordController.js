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

module.exports = { createPassword };