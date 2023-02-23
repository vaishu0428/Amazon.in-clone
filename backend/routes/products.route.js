
const express = require("express");
const {
    addProduct, 
    getProducts,

} = require("../controllers/products.controller");
const validateProductFields = require("../middleware/fieldAnalyzer.middleware");

const productRouter = express.Router();

productRouter.post("/add", validateProductFields,addProduct)
productRouter.get("/get", getProducts)

module.exports=productRouter