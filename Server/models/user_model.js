const mongoose = require("mongoose");

const reqString = {
    type: String, 
    unique: true,
};

const userSchema = new mongoose.Schema({
    userName: reqString,
    password: reqString,
    firstName: reqString,
    lastName: reqString,
    phoneNumber: String,
    email: String,
    adress: String
});

module.exports = mongoose.model('user',userSchema);