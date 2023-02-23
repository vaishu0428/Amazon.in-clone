const express = require("express");
const {
    addToCart,

} = require("../controllers/cart.controller");
const { authenticateToken } = require("../middleware/userAuth.middleware");

const cartRouter = express.Router();

cartRouter.post("/add",authenticateToken, addToCart)

module.exports = cartRouter
