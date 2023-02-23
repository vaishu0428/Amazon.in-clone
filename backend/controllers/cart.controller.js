const cartModel = require("../model/cart.model");
const prodtID = "63f76572b286efb722870609";

const addToCart = async (req, res) => {
  const userID = req.body.userID;
  console.log(userID);
  const cadtItems = new cartModel({
    user: userID,
    products: [{ product: prodtID }],
    quantity: 1,
  });
  await cadtItems.save();

  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'user'
  //   },
  //   products: [{
  //     product: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Product'
  //     },
  //     quantity: Number
  //   }],
  //   total: Number
  res.send("check");
  // const cartdata= await cartModel.find()
};

module.exports = {
  addToCart,
};
