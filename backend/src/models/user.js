const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //structure of a user document
    email:{ //stores users email normalised to lowercase with surrounding spaces removed
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    passwordHash: { //stores the Argon2id authentication hash
        type: String,
        required: true
    }
}, {timestamps: true}); //timestamps automatically adds a createdAt and updatedAt

const User = mongoose.model('User', userSchema); //creates the user model

module.exports = User;