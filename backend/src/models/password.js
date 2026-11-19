const mongoose = require ('mongoose');

//User model:
// {
//     _id: ObjectId("111"),
//     email: "sam@gmail.com"
// }

// Password model:
// {
//     website: "github.com",
//     username: "sam123",
//     password: "hashed_password",
//     user: ObjectId("111")  Password document stores the ID of its owner.
// }

const passwordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //user field will store a MongoDB ObjectId
        ref: 'User', //tells mongoose which model this ID belongs to
        required: true
    },
    website:{
        type: String,
        required: true,
        trim: true
    },
    username:{ 
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true }); 

const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;

