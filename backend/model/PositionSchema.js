const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
  userId: String,
});

// model

const Position = new mongoose.model("Position", PositionSchema);

module.exports = Position;
