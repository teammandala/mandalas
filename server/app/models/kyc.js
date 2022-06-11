const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kycForm = new Schema({
  fullName: {
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
  idImage: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  reqDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = KYC = mongoose.model("kyc", kycForm);
