const express = require("express");
const {
  registerUser,
  getAllusers,
  userLogin,
} = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.get("/", getAllusers);
userRoutes.post("/register", registerUser);
userRoutes.post("login", userLogin);

module.exports = {
  userRoutes,
};
