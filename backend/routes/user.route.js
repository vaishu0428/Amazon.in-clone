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

userRoutes.get("/", authenticateToken, getAllusers);
userRoutes.post("/register", userSignupInputValidate, registerUser);
userRoutes.post("/login", userLoginInput, userLogin);
userRoutes.post("/logout", authenticateToken, userLogout);
userRoutes.patch("/profile", authenticateToken, userUpdateProfile);
userRoutes.delete(
  "/profile/deleteaddress",
  authenticateToken,
  userDeleteAddress
);

module.exports = {
  userRoutes,
};
