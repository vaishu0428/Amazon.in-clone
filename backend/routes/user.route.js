const express = require("express");
// const {validateUserData}=require("../middleware/userFieldAnalyzer.middleware")
const {
  registerUser,
  getAllusers,
  userLogin,
  userLogout,
  userUpdateProfile,
  forgetPassword,
} = require("../controllers/user.controller");
const { authenticateToken } = require("../middleware/userAuth.middleware");
const {
  userSignupInputValidate,
  userLoginInput,
  profileInput
} = require("../middleware/userFieldAnalyzer.middleware");

const userRoutes = express.Router();

userRoutes.get("/", getAllusers);
userRoutes.post("/register", userSignupInputValidate, registerUser);
userRoutes.post("/login", userLoginInput, userLogin);
userRoutes.post("/logout",authenticateToken,userLogout)
userRoutes.patch("/profile",profileInput,userUpdateProfile)
userRoutes.patch("/forgetPassword", authenticateToken,forgetPassword)


module.exports = {
  userRoutes,
};
