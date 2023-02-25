const cartModel = require("../model/cart.model");
const { orderModel } = require("../model/order.model");
const productModel = require("../model/products.model");

const postOrder = async (req, res) => {
  const { userID, paymentMethod } = req.body;
  try {
    const cartData = await cartModel
      .findOne({ user: userID })
      .populate({
        path: "products.product",
        model: "product",
      })
      .lean();

    if (!cartData || cartData.products.length === 0) {
      return res.status(404).send({ msg: "No cart data found for this user" });
    }

    const orderItems = [];

    let totalAmount = 0;

    cartData.products.forEach((product) => {
      const quantity = product.quantity;
      const price = product.product.price;

      const total = quantity * price;
      totalAmount += total;

      orderItems.push({
        product: product.product._id,
        quantity: quantity,
      });
    });

    const order = new orderModel({
      user: userID,
      products: orderItems,
      totalAmount: totalAmount,
      payment: paymentMethod,
      status: "pending",
    });

    await order.save();

    await cartModel.findOneAndUpdate(
      { user: userID },
      { $set: { products: [] } }
    );

    res
      .status(201)
      .send({ msg: "Order placed successfully", order: order.products });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Something went wrong in the server", err: error.message });
  }
};

const getAllOrder = async (req, res) => {
  const { userID } = req.body;
  try {
    const orderData = await orderModel
      .find({ user: userID })
      .populate({
        path: "products.product",
        model: "product",
      })
      .lean();

    if (
      !orderData ||
      orderData.length === 0 ||
      orderData[0].products.length === 0
    ) {
      return res.status(404).send({ msg: "No oders data found for this user" });
    }

    const orderItems = [];

    let totalPrice = 0;

    orderData.forEach((order) => {
      order.products.forEach((product) => {
        const quantity = product.quantity;
        const price = product.product.price;

        const total = quantity * price;
        totalPrice += total;

        // console.log(quantity,"quantity", price,"price")
        orderItems.push({
          quantity: product.quantity,
          product: product.product,
        });
      });
    });

    // console.log(totalPrice,"totalprice"
    let totalorder = orderItems.length;
    res.status(200).send({ orderItems, totalPrice: totalPrice, totalorder });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Something went wrong in the server", err: error.message });
  }
};

const cencelOrder = async (req, res) => {
  const { productId } = req.query;
  const { userID, orderId } = req.body;

  try {
    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).send({ msg: "Order not found" });
    }

    if (order.user.toString() !== userID.toString()) {
      return res.status(401).send({ msg: "Unauthorized to delete this order" });
    }

    if (order.status === "delivered") {
      return res.status(400).send({ msg: "Cannot delete delivered orders" });
    }

    // Find the index of the product to be deleted
    const index = order.products.findIndex(
      (p) => p.product.toString() === productId
    );

    if (index === -1) {
      return res.status(404).send({ msg: "Product not found in order" });
    }

    // Save the canceled product
    const canceledProduct = order.products.splice(index, 1)[0];

    // Increase the quantity of the canceled product in the inventory
    const product = await productModel.findById(canceledProduct.product);
    product.quantity += canceledProduct.quantity;
    await product.save();
    await order.save();

    res
      .status(200)
      .send({ msg: `Order canceled successfully with productID:${productId}` });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error: error.message });
  }
};

const getallOrdersByAdmin = async (req, res) => {
  const orders = await orderModel.find();
  try {
    // console.log(orders);
    res.status(200).send({ msg: `All orders `, orders });
  } catch (err) {
    res.status(500).send({ msg: "Something went wrong", error: err.message });
  }
};

const UpdateStatusOrder = async (req, res) => {
  const { orderId } = req.query; // replace with the order ID you want to update
  const { orderStatus } = req.body; // replace with the new status value you want to set
  try {
    orderModel.findOneAndUpdate(
      { _id: orderId },
      { $set: { status: orderStatus } },
      { new: true }, // to return the updated document
      (err, updatedOrder) => {
        if (err) {
          console.error(err);
          res
            .status(500)
            .send({ msg: "Something went wrong", error: err.message });
        } else {
          console.log(updatedOrder);
          if (updatedOrder.status.trim() === orderStatus.trim()) {
            res
              .status(200)
              .send({ msg: "Order status is already set to this value." });
          } else {
            res.status(200).send({ msg: "Order status updated successfully." });
          }
        }
      }
    );
  } catch (err) {
    res.status(500).send({ msg: "Something went wrong", error: err.message });
  }
};

module.exports = {
  postOrder,
  getAllOrder,
  cencelOrder,
  UpdateStatusOrder,
  getallOrdersByAdmin,
};
