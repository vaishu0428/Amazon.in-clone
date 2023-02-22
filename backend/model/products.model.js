const mongoose= require("mongoose")

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    brand: String,
    disc: String,
    rating: Number,  
    category: String,
    subCategory: String,
    image: [{
      url: String
    }]
  },
  { versionKey: false });

  // model of the products document

  const productModel= mongoose.model("product",productSchema);

  module.exports=productModel
