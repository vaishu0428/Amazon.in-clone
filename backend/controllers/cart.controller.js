const cartModel = require("../model/cart.model")


const addToCart= async(req,res)=>{
  
    const cartdata= await cartModel.find()
}

module.exports={
    addToCart
}