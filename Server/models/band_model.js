const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const reqString = {
    type: String, 
    unique: true,
};

const participantsSchema = new mongoose.Schema({
    firstName: reqString,
    lastName: reqString,
    Role: reqString,
});

const songsSchema = new mongoose.Schema({
    songName: String,
    songDuration: Number,
});

const bandSchema = new mongoose.Schema({
    bandUserName: reqString,
    bandName: reqString,
    password: reqString,
    email: {
        reqString,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Email invalid",
          ],
    },
    bandParticipants: [participantsSchema],
    songs: [songsSchema],
});

bandSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

bandSchema.methods.createJWT = function () {
    return jwt.sign(
      { bandId: this._id, email: this.email },
      process.env.JWT_SECRET
    )
};

bandSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model("bands",bandSchema);