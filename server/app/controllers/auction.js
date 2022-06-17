const express = require("express");
const router = express.Router();
const Auction = require("../models/auction");

// router for kyc request
const auctoinRequest = async (req, res) => {
  try {
    const { itemName, description, bidStart, bidEnd, seller, startingBid } =
      req.body;
    const image = req.file.path;
    const newAuction = new Auction({
      itemName,
      description,
      image,
      bidStart,
      bidEnd,
      seller,
      startingBid,
    });

    await newAuction
      .save()
      .then(() =>
        res.status(201).send({ message: `Auction Requested Successfully` })
      )
      .catch((err) => res.status(400).send({ message: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// router for kyc get all
const getAuctions = async (req, res) => {
  try {
    await Auction.find()
      .then((auctionData) => {
        res.status(200).send({ auctionData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { auctoinRequest, getAuctions };
