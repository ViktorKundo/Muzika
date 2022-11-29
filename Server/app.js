require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const app = express();

app.use(express.json());

PORT = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}.....`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();