const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 20
    },
    email:{
        type: String,
        required: true,
        min: 4,
        max: 10
    },
    password:{
        type: String,
        required: true,
        min: 3,
        max: 10
    },

    
})

module.exports = mongoose.model("User", UserSchema);