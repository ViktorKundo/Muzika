const express = require("express");
const {register, login, deleteUser, logout, showMe} = require("../controllers/users");

const bandRouter = express.Router();

const bandControler = new bandController;

bandRouter.post("/register",bandControler.registerBand);

module.exports = bandRouter;