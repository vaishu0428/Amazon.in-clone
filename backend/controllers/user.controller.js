const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
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
  const { name, email, pass, userType } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    console.log("user sign up", userExists);

    if (userExists) {
      return res.status(409).json({ message: "User Exists! Please Login " });
    }
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        res
          .status(400)
          .send({ message: "Somthing went wrong", err: err.message });
        return;
      }
      console.log("hash", hash);
      const new_user = new UserModel({
        name,
        email,
        pass: hash,
        userType,
      });
      await new_user.save();
      res.status(200).send("User Registered");
    });
  } catch (err) {
    res.status(400).send({ msg: "Somthing went wrong", err: err.message });
  }
};

const userLogin = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    console.log("login", userExists);
    if (userExists.length > 0) {
      bcrypt.compare(pass, userExists[0].pass, function (err, result) {
        if (result) {
          const token = jwt.sign(
            { parentUserID: user[0]._id },
            process.env.userSecretKey
          );
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

module.exports = {
  getAllusers,
  registerUser,
  userLogin,
};
