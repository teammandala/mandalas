const express = require("express");
const Carousel = require("../models/carousel");
const router = express.Router();
// router for kyc request
const carouselRequest = async (req, res) => {
  try {
    const { itemName, description } = req.body;
    const image = req.file.path;
    const newCarousel = new Carousel({
      itemName,
      description,
      image,
    });

    await newCarousel
      .save()
      .then(() =>
        res.status(201).send({ message: `Carousel uploaded Successfully` })
      )
      .catch((err) => res.status(400).send({ message: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// router for kyc get all
const getCarousel = async (req, res) => {
  try {
    await Carousel.find()
      .then((carouselData) => {
        res.status(200).send({ carouselData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteCarousel = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Carousel.findByIdAndDelete(id).then(() => {
      res.status(201).send({
        message: `carousel deleted successfully`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = { carouselRequest, getCarousel, deleteCarousel };
