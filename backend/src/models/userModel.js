const mongoose = require("mongoose");

// Define Schema
const UserSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { timestamps: true },
);
const userModel = mongoose.model("users", UserSchema);

module.exports = {userModel};

