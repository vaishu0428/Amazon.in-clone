const express = require("express");
require("dotenv").config();
// const {validateUserData}=require("../middleware/userFieldAnalyzer.middleware")
const {
  registerUser,
  getAllusers,
  userLogin,
  userLogout,
  userUpdateProfile,
  userDeleteAddress,
} = require("../controllers/user.controller");
const { authenticateToken } = require("../middleware/userAuth.middleware");
const {
  userSignupInputValidate,
  userLoginInput,
} = require("../middleware/userFieldAnalyzer.middleware");

const userRoutes = express.Router();

userRoutes.post("/register", userSignupInputValidate, registerUser);
userRoutes.post("/login", userLogin);
userRoutes.use(authenticateToken);
userRoutes.get("/", getAllusers);
userRoutes.post("/logout", userLogout);
userRoutes.patch("/profile", userUpdateProfile);
userRoutes.delete("/profile/deleteaddress", userDeleteAddress);

module.exports = {
  userRoutes,
};
