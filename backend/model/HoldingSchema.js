const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  userId: String,
});

// model
const Holding = new mongoose.model("Holding", holdingSchema);

module.exports = Holding;
