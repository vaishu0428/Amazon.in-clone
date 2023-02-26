const mongoose= require("mongoose")

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product'
    },
    quantity: Number
  }],

},{
  versionKey:false
});

// cart model 

const cartModel= mongoose.model("cart",cartSchema)

module.exports=cartModel