const mongoose = require("mongoose");

const reqString = {
    type: String, 
    unique: true,
};

const participantsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    Role: String,
});

const songsSchema = new mongoose.Schema({
    songName: String,
    songDuration: Number,
});

const bandSchema = new mongoose.Schema({
    bandUserName: reqStrin,
    bandName: String,
    password: reqString,
    email: reqString,
    bandParticipants: [participantsSchema],
    songs: [songsSchema],
});

module.exports = mongoose.model("bands",bandSchema);