const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carouselSchema = new Schema({
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
  }
  
});

module.exports = Carousel = mongoose.model("carousel", carouselSchema);
