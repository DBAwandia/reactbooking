const mongoose = require("mongoose")
const validator = require("validator")


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        minlength: 6,
        maxlength: 20,
        required: true,
        
        unique: true
    },
    email:{
        type: String,
        validator:{
            validate: validator.isEmail,
            message: " Input right email"
        },
        required: true,
    },
    password:{
        type: String,
        minlength: 6,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},
    {timestamps: true},
)

const User = mongoose.model("users", userSchema)
module.exports = User