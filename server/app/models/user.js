const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, `username field can't be empty`],
    lowercase: true,
    match: [/^[a-zA-Z0-9_]+$/, `invalid username`],
    unique: [true, `user already exists`],
  },
  email: {
    type: String,
    required: [true, `email field can't be empty`],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, `invalid email`],
    unique: [true, `user already exists`],
  },
  phone: {
    type: String,
    required: [true, `phone no. is required`],
    match: [
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      `invalid phone`,
    ],
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    maxlength: 60,
  },
  password1: {
    type: String,
    trim: true,
    minlength: 6,
    maxlength: 60,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
    default: "media/avatar/avatar.png",
  },
  role: {
    type: String,
    default: "USER",
    enum: ["USER", "AUCTIONEER", "ADMIN"],
  },
  address: {
    type: String,
  },
  bio: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("user", userSchema);
