const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        quantity: Number,
      },
    ],
    totalAmount: { type: Number },
    payment: {
      type: String,
      enum: ["cashOn", "UPI", "netBanking"],
      default: "cashOn",
    },
    status: {
      type: String,
      enum: ["pending", "packed", "dispatch", "cancelled", "deliverd"],
      default: "pending",
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// order model

const orderModel = mongoose.model("order", orderSchema);

module.exports = { orderModel };
