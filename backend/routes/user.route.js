const express = require("express");
require("dotenv").config();
// const {validateUserData}=require("../middleware/userFieldAnalyzer.middleware")
const {
  registerUser,
  getAllusers,
  userLogin,
  userLogout,
  userUpdateProfile,
} = require("../controllers/user.controller");
const { authenticateToken } = require("../middleware/userAuth.middleware");
const {
  userSignupInputValidate,
  userLoginInput,
  profileInput,
} = require("../middleware/userFieldAnalyzer.middleware");

// const cloudinary = require("cloudinary").v2;

// // Configuration
// cloudinary.config({
//   cloud_name: process.env.cloud_name,
//   api_key: process.env.api_key,
//   api_secret: process.env.api_secret,
// });

const userRoutes = express.Router();

userRoutes.get("/", getAllusers);
userRoutes.post("/register", userSignupInputValidate, registerUser);
userRoutes.post("/login", userLoginInput, userLogin);
userRoutes.post("/logout", authenticateToken, userLogout);
userRoutes.put("/profile", authenticateToken, userUpdateProfile);

module.exports = {
  userRoutes,
};
