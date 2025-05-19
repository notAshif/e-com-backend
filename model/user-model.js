const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/scatch");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  }],
  contact: Number,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
