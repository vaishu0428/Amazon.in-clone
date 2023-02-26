const express = require("express");
const {
    addToCart,
    getCartData,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,

} = require("../controllers/cart.controller");
const { authenticateToken } = require("../middleware/userAuth.middleware");

const cartRouter = express.Router();

cartRouter.post("/add", authenticateToken, addToCart)
cartRouter.get("/get", authenticateToken, getCartData)
cartRouter.delete("/remove/:id", authenticateToken, removeFromCart);
cartRouter.patch("/incQty/:id", authenticateToken,incrementQuantity)
cartRouter.patch("/decQty/:id", authenticateToken, decrementQuantity)

module.exports = cartRouter
