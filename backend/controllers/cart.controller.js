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

module.exports = {
  addToCart,
};
=======
// const addToCart = async (req, res) => {
//     const user_id = req.body.userID;
//     //  console.log(user_id)
//     const product_id_1 = req.body.product_id_1;
//     // const product_id_2 = req.body.product_id_2;
//     const qty = req.body.quantity

//     const cart = new cartModel({
//         user: user_id,
//         products: [
//             { product: product_id_1, quantity: qty },
//             // { product: product_id_2, quantity: qty }
//         ],

//     })

//     try {
//         await cart.save();
//         res.status(200).send({ msg: "product added to cart successs" })
//     } catch (error) {
//         res.status(500).send({ msg: "Something went wrong in the server", err: error.message })
//     }
// }


const addToCart = async (req, res) => {
    const user_id = req.body.userID;
    const product_id_1 = req.body.product_id_1;
    const qty = req.body.quantity;
  
    try {
      // check if the user has an existing cart
      let cart = await cartModel.findOne({ user: user_id });
  
      if (!cart) {
        // create a new cart for the user
        cart = new cartModel({
          user: user_id,
          products: [{ product: product_id_1, quantity: qty }],
        });
      } else {
        // check if the product already exists in the cart
        const existingProduct = cart.products.find(
          (p) => p.product.toString() === product_id_1
        );
  
        if (existingProduct) {
          // if the product already exists, increment the quantity
          existingProduct.quantity += qty;
        } else {
          // add the new product to the cart
          cart.products.push({ product: product_id_1, quantity: qty });
        }
      }

  
      // save the cart and send a response
      await cart.save();
      res.status(200).send({ msg: "product added to cart successs"});
    } catch (error) {
      res.status(500).send({ msg: "Something went wrong in the server", err: error.message });
    }
  };
  

const getCartData = async (req, res) => {
    const user_id = req.body.userID;


    try {
        const cartData = await cartModel
          .find({ user: user_id })
          .populate({
            path: 'products.product',
            model: 'product'
          })
          .lean();
      
          if (!cartData || cartData.length === 0 || cartData[0].products.length === 0) {
            return res.status(404).send({ msg: 'No cart data found for this user' });
          }
          
      
        const cartItems = [];

        let totalPrice = 0;
      
        cartData.forEach((cart) => {
          cart.products.forEach((product) => {

            const quantity = product.quantity;
            const price = product.product.price;

            const total = quantity * price;
            totalPrice += total;

            // console.log(quantity,"quantity", price,"price")
            cartItems.push({
              quantity: product.quantity,
              product: product.product
            });
          });
        });

        // console.log(totalPrice,"totalprice")
      
        res.status(200).send({cartItems,totalPrice:totalPrice});
      } catch (error) {
        res.status(500).send({ msg: 'Something went wrong in the server', err: error.message });
      }
      
};

const removeFromCart = async (req, res) => {
    try {
      const { userID } = req.body;
      const productID=req.params.id
  
      const cart = await cartModel.findOne({ user: userID });
  
      if (!cart) {
        return res.status(404).send({ msg: 'Cart not found' });
      }
  
      const productIndex = cart.products.findIndex(
        (product) => product.product.toString() === productID
      );

    //   console.log(productIndex,"productIndex")
  
      if (productIndex === -1) {
        return res.status(404).send({ msg: `Product not found in the cart with id : ${productID}`});
      }
  
      // Remove the product from the cart
      cart.products.splice(productIndex, 1);
  
      await cart.save();
  
      return res.status(200).send({ msg: 'Product removed from the cart' });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: 'Something went wrong in the server' });
    }
  };
  
  const incrementQuantity = async (req, res) => {
    const cartItemId = req.params.id;
    console.log(cartItemId, "cartItemId");
  
    try {
      const cartItem = await cartModel.findOneAndUpdate(
        { 'products.product': cartItemId },
        { $inc: { 'products.$.quantity': 1 } },
        { new: true }
      ).populate({
        path: 'products.product',
        model: 'product'
      });

        // console.log(cartItem,"cartItem")
  
      if (!cartItem) {
        return res.status(404).send({ msg: 'Cart item not found' });
      }
  
      res.status(200).send({ cartItem });
    } catch (error) {
      res.status(500).send({ msg: 'Something went wrong in the server', err: error.message });
    }
  };

  const decrementQuantity = async (req, res) => {
    const cartItemId = req.params.id;
    // console.log(cartItemId, "cartItemId");
  
    try {
      const cartItem = await cartModel.findOneAndUpdate(
        { 'products.product': cartItemId },
        { $inc: { 'products.$.quantity': -1 } },
        { new: true }
      ).populate({
        path: 'products.product',
        model: 'product'
      });
  
      if (!cartItem) {
        return res.status(404).send({ msg: 'Cart item not found' });
      }
  
      // Check if quantity has become 0 after decrementing
      if (cartItem.products.find(p => p.product._id.toString() === cartItemId).quantity === 0) {
        await cartModel.findOneAndUpdate(
          { 'products.product': cartItemId },
          { $pull: { products: { product: cartItemId } } }
        );
  
        return res.status(200).send({ msg: `Cart item removed since this product : ${cartItemId} quantity has become less then 0 ` });
      }
  
      res.status(200).send({ cartItem });
    } catch (error) {
      res.status(500).send({ msg: 'Something went wrong in the server', err: error.message });
    }
  };
  
module.exports = {
    addToCart,
    getCartData,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
}
