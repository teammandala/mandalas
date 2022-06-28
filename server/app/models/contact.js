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
  message : {
    type: String,
    required: true,
  },
});

module.exports = contact = mongoose.model("contact", ContactForm);
