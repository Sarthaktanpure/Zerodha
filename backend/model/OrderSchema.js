const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// model
const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;
