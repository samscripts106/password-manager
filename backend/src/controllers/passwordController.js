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

//Update an existing password entry
const updatePassword = async(req,res) =>{
    try{
        const { id } = req.params;
        const { website, username, password } = req.body;

        if (!website || !username || !password){
            return res.status(400).json({
                message: 'Website username and password are required'
            });
        }

        const updatePassword = await Password.findOneAndUpdate(
            { // Mongo DB searches for the requested documnet satisfying both the conditions
                _id: id, // _id matches the requested ID
                user: req.session.userId // user matches the currently logged-in user
            },
            {
                website,
                username,
                password
            },
            {
                new: true, // returns the updated documnet rather than the old one
                runValidators: true // makes Mongoose runs schema validation on the updated fields
            }
        );

        if(!updatePassword){
            return res.status(400).json({
                message: 'Password not found'
            });
        }

        res.status(200).json({
            message: 'Password updated successfully'
        })
    } catch (error) {
        console.error('Update password error:', error.message);
        
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

module.exports = { createPassword, getPasswords, updatePassword };