const productModel = require("../model/products.model");

const decrementProductQuantity = async (productId, quantityToDecrement) => {
    // console.log(productId,"productid:::", quantityToDecrement,"quantityToidec")


    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }
    if (product.quantity < quantityToDecrement) {
      throw new Error(`Not enough quantity available for product ${productId}`);
    }
    const newQuantity = product.quantity - quantityToDecrement;
    // console.log(newQuantity,"newQuantity")
    await productModel.findByIdAndUpdate(productId, { $set: { quantity: newQuantity }});
    
  }
  


  module.exports=decrementProductQuantity