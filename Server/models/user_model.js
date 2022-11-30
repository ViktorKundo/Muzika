const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {type:String, unique:true},
    password: String,
    firstName: {type:String, unique:true},
    lastName: {type:String, unique:true},
    phoneNumber: String,
    email: String,
    adress: String
});

export const User=mongoose.model('user',userSchema);