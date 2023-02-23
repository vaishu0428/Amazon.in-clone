const express = require("express");
const {validateUserData}=require("../middleware/userFieldAnalyzer.middleware")
const {
  registerUser,
  getAllusers,
  userLogin,
} = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.get("/", getAllusers);
userRoutes.post("/register",validateUserData, registerUser);
userRoutes.post("/login", userLogin);

module.exports = {
  userRoutes,
};
