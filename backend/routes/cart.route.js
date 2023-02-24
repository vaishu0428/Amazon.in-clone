const express = require("express");
const {
    addToCart,
    getCartData,
    removeFromCart,
    incrementQuantity,

} = require("../controllers/cart.controller");
const { authenticateToken } = require("../middleware/userAuth.middleware");

const cartRouter = express.Router();

cartRouter.post("/add", authenticateToken, addToCart)
cartRouter.get("/get", authenticateToken, getCartData)
cartRouter.delete("/remove/:id", authenticateToken, removeFromCart);
cartRouter.patch("/incQty/:id", authenticateToken,incrementQuantity)

module.exports = cartRouter
