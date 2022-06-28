const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auctionSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  bidStart: {
    type: Date,
    default: Date.now,
  },
  bidEnd: {
    type: Date,
    required: "Auction end time is required",
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "approved", "rejected"],
  },

  startingBid: { type: Number, default: 0 },
  bids: [
    {
      bidder: { type: mongoose.Schema.ObjectId, ref: "User" },
      bid: Number,
      time: Date,
    },
  ],
});

module.exports = Auction = mongoose.model("auction", auctionSchema);
