const express = require("express");
const auction = require("../models/auction");
const { findByIdAndUpdate } = require("../models/auction");
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
const getCurrentAuction = async (req, res) => {
  try {
    const id = req.params.id;
    await Auction.findById(id)
      // .populate("bids.bidder", "_id username")
      // .populate("seller", "_id username")
      .then((currentauctionData) => {
        res.status(200).send({ currentauctionData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const auctionStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Auction.findByIdAndUpdate(
      id,
      { $set: { status: req.body.status } },
      { new: true }
    ).then((auction) => {
      res.status(201).send({
        auction,
        message: `Auction status changed to  ${req.body.status}`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = {
  auctoinRequest,
  getAuctions,
  auctionStatus,
  getCurrentAuction,
};
