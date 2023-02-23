const express = require("express");
const {
    addToCart,

} = require("../controllers/cart.controller");

const cartRouter = express.Router();

cartRouter.post("/add", addToCart)

module.exports = cartRouter
