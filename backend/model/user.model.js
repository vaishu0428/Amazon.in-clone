const mongoose = require("mongoose");

const defaultAddress = {
  city: "",
  area: "",
  district: "",
  state: "",
  pinCode: "123456",
};


const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    image: { type: String, default: "" },
    mobile: {
      type: Number,
      default: 1234567890,
      min: 1000000000,
      max: 9999999999,
    },
    address: {
      type: [
        {
          city: { type: String, default: defaultAddress.city },
          area: { type: String, default: defaultAddress.area },
          state: { type: String, default: defaultAddress.state },
          pinCode: {
            type: Number,
            default: defaultAddress.pinCode,
            min: 100000,
            max: 999999,
          },
        },
      ],
      default: [defaultAddress],
    },
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
