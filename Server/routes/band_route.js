const express = require("express");
const {register, login, deleteUser, logout, showMe} = require("../controllers/band_controller");

const bandRouter = express.Router();

bandRouter.route("/register").post(register);
bandRouter.route("/login").post(login);
bandRouter.route("/logout").get(logout);
// bandRouter.route("/showme").get(auth, showMe);
// bandRouter.route("/delete").delete(auth, deleteUser)

module.exports = bandRouter;