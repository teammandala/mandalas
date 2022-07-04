const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactForm = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status:{
    type: String,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "resolved"],
  },

  message : {
    type: String,
    required: true,
  },
});

module.exports = contact = mongoose.model("contact", ContactForm);
