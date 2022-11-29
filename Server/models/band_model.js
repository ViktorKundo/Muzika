const mongoose = require("mongoose");

const bandSchema = new mongoose.Schema({
    bandName: {type: String, unique: true},
    password: String,
    email: String,
    bandParticipants,
})