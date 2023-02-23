const express = require("express");
const {
    addProduct, 
    getProducts,

} = require("../controllers/products.controller");
const validateProductFields = require("../middleware/fieldAnalyzer.middleware");

const productRouter = express.Router();

// productRouter.get("/", getAllProducts);
productRouter.post("/add", validateProductFields, addProduct);

module.exports = productRouter;