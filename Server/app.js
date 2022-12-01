require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const app = express();
const path = require('path')

const bandRouter = require("./routes/band_route");

PORT = 5000;


app.use(express.static("../Static"));
        
app.use("/api/bands", bandRouter);

app.use(express.json());

app.use(express.urlencoded({ extended: false}));

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Successfully connected to database!");
        
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}.....`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();