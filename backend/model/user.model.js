const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    userType: { type: String, enum: ["user", "admin"], default: "user" },
    image: { type: String, default: "" },
    mobile: {
      type: Number,
      default: 1234567890,
      min: 1000000000,
      max: 9999999999,
    },
    address: [
      {
        city: { type: String },
        area: { type: String },
        district: { type: String },
        state: { type: String },
        pinCode: { type: Number, min: 100000, max: 999999 },
      },
    ],
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
