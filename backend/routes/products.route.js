
const express = require("express");
const {
    addProduct,

} = require("../controllers/products.controller");
const validateProductFields = require("../middleware/fieldAnalyzer.middleware");

const productRouter = express.Router();

productRouter.post("/add", validateProductFields,addProduct)

module.exports=productRouter