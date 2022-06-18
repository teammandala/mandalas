const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kycForm = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    rquired: true,
  },
  country: {
    type: String,
  },
  idImage: {
    type: String,
    required: true,
    // unique: [true, `kyc already submitted by user`],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "auctioneer", "rejected", "admin"],
  },
  reqDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = KYC = mongoose.model("kyc", kycForm);
