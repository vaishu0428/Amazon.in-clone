const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  quantity: {
    type: String,
    required: true
  },

},
  {
    versionKey: false
  });

// model of the products document

const productModel = mongoose.model("product", productSchema);

module.exports = productModel
