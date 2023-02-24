const express = require("express");
const {
    addProduct, 
    getProducts,
    getDetails,
    updateProduct,
    deleteProduct,

} = require("../controllers/products.controller");
const adminAccesssOnly = require("../middleware/admin.middleware");
const validateProductFields = require("../middleware/fieldAnalyzer.middleware");
const { authenticateToken } = require("../middleware/userAuth.middleware");

const productRouter = express.Router();
 

productRouter.post("/add", authenticateToken, adminAccesssOnly,validateProductFields, addProduct);
productRouter.get("/get", getProducts)
productRouter.get("/get/:id",getDetails)
productRouter.patch("/update/:id", authenticateToken,adminAccesssOnly,updateProduct)
productRouter.delete("/delete/:id", authenticateToken,adminAccesssOnly,deleteProduct)

module.exports = productRouter;
