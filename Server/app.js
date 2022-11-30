require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const bandSchema = require("./models/band_model")
const app = express();

app.use(express.json());

PORT = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Successfully connected to database!");
        await new bandSchema({
            bandUserName: "zvezdice123",
            bandName: "Starset",
            password: "prejaki",
            email: "starset@gmail.com",
            bandParticipants: [
                {firstName: "Luka", lastName: "Bogdanovic", Role: "Pevac"},
                {firstname: "Sveti", lastName: "Mici", Role: "Vanga"},
                ]
        }).save()
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}.....`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();