const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAllusers = async (req, res) => {
  try {
    users = await UserModel.find();
    // console.log("all users", users);
    res.status(200).send({ msg: "Welcome User Home Page", users });
  } catch (err) {
    res.status(400).send({ msg: "Somthing went wrong" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, pass, mobile, role, address } = req.body;

    // Check if user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).send({ error: "User already exists" });
    }

    // 1.) Create new user
    // a.)password hashing
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        res
          .status(400)
          .send({ message: "Somthing went wrong", err: err.message });
        return;
      }
      // console.log("hash", hash);
      const new_user = new UserModel({
        name,
        email,
        pass: hash,
        mobile,
        role,
        address,
      });

      // Save user to database
      await new_user.save();
      res.status(201).send({ message: "User Registered", new_user });
    });
  } catch (err) {
    res.status(400).send({ msg: "Somthing went wrong", err: err.message });
  }
};

const userLogin = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      bcrypt.compare(pass, userExists.pass, async function (err, result) {
        if (result) {
          const token = jwt.sign(
            { ExistingUserID: userExists._id },
            process.env.SECRET_KEY
          );
          // console.log("login l-101", userExists.isActive);
          userExists.isActive = true;
          await userExists.save();
          res.status(200).send({ msg: "Login Successfull", token: token });
        } else {
          res.status(401).send("Wrong Credntials");
        }
      });
    } else {
      res.status(401).send("Login Faild");
    }
  } catch (err) {
    res.status(400).send({ msg: "Somthing went wrong", err: err.message });
  }
};

const userLogout = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.isActive = false;
    await user.save();
    res.status(200).send("Logout Successful");
  } catch (err) {
    console.error(err);
    res.status(400).send({ msg: "Something went wrong", err: err.message });
  }
};

const userUpdateProfile = async (req, res) => {
  
};

const forgetPassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  if( ! email || ! oldPassword){
    return res.status(400).send({msg:"email and current password required"})
  }

  if(!newPassword || newPassword.trim().length<6)
  {
    return res.status(400).send({msg:"New password missing or length less 6"})
  }
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // check if old password matches the one in the database
    const isMatch = await bcrypt.compare(oldPassword, user.pass);
    if (!isMatch) {
      return res.status(401).send("Invalid old password");
    }

    // hash and update user's password with the new password
    const hashedPassword = await bcrypt.hash(newPassword, 5);
    user.pass = hashedPassword;
    await user.save();

    res.status(200).send("Password updated successfully");
  } catch (error) {
    res.status(400).send({  error: error.message });
  }
};


module.exports = {
  getAllusers,
  registerUser,
  userLogin,
  userLogout,
  userUpdateProfile,
  forgetPassword
};
