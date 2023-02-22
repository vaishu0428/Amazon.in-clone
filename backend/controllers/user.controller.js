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
  const { name, email, pass, userType, address } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });

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
      const defaultAddress = {
        city: "",
        area: "",
        district: "",
        state: "",
        pinCode: "123456",
      };
      console.log("hash", hash);
      const new_user = new UserModel({
        name,
        email,
        pass: hash,
        userType,
        address: address || [defaultAddress],
      });
      await new_user.save();
      res.status(200).send("User Registered");
    });
  } catch (err) {
    res.status(400).send({ msg: "Somthing went wrong", err: err.message });
  }
};

/**
 * address: [
      {
        city: { type: String, default: "shgdvd" },
        area: { type: String, default: "sdjvf" },
        district: { type: String, default: "sdjf" },
        state: { type: String, default: "sdb" },
        pinCode: { type: Number, default: 123456, min: 100000, max: 999999 },
      },
    ],
 */

const userLogin = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const userExists = await UserModel.findOne({ email });
    console.log("login", userExists);
    if (userExists) {
      bcrypt.compare(pass, userExists.pass, function (err, result) {
        if (result) {
          const token = jwt.sign(
            { parentUserID: userExists._id },
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

const updateProfile = (req, res) => {};

module.exports = {
  getAllusers,
  registerUser,
  userLogin,
};
