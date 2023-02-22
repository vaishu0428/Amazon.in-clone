const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    userType: { type: String, enum: ["user", "admin"], default: "user" },
    Image: { type: String },
    Mobile: { type: Number },
    created: {
      type: Date,
      default: Date.now,
    },
    address: [
      {
        city: { type: String },
        area: { type: String },
        pinCode: { type: Number },
      },
    ],
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
