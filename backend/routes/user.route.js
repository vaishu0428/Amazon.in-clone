const express = require("express");
// const {validateUserData}=require("../middleware/userFieldAnalyzer.middleware")
const {
  registerUser,
  getAllusers,
  userLogin,
  userLogout,
  userUpdateProfile,
  forgetPassword,
  usergetProfile,
  userDeleteAddress,
} = require("../controllers/user.controller");
const adminAccesssOnly = require("../middleware/admin.middleware");
const { authenticateToken } = require("../middleware/userAuth.middleware");
const {
  userSignupInputValidate,
  userLoginInput,
  profileInput
} = require("../middleware/userFieldAnalyzer.middleware");

const userRoutes = express.Router();

userRoutes.get("/", authenticateToken, adminAccesssOnly, getAllusers);
userRoutes.post("/register", userSignupInputValidate, registerUser);
userRoutes.post("/login", userLoginInput, userLogin);
userRoutes.post("/logout", authenticateToken, userLogout)
userRoutes.get("/address", authenticateToken, usergetProfile)
userRoutes.patch("/profile", authenticateToken, profileInput, userUpdateProfile)
userRoutes.delete("/delete/address", authenticateToken,userDeleteAddress);
userRoutes.patch("/forgetPassword", authenticateToken, forgetPassword)


module.exports = {
  userRoutes,
};
