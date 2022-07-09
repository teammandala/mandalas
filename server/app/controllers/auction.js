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
    // console.log(Auction.findById(id).populate("bids.bidder"));
    const ad = await Auction.findById(id)
      .populate("bids.bidder", "username email phone", User)
      .populate("seller", "username email phone", User)
      .exec()
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

const auctionBySeller = async (req, res, next) => {
  try {
    let auctions = await Auction.find({ seller: req.params.id })
      .populate("seller", "name", User)
      .populate("bids.bidder", "username email phone", User)
      .then((currentauctionData) => {
        res.status(200).send({ currentauctionData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const deleteAuction = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Auction.findByIdAndDelete(id).then(() => {
      res.status(201).send({
        message: `Auction deleted successfully`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const listByBidder = async (req, res) => {
  try {
    let auctions = await Auction.find({ "bids.bidder": req.params.id })
      .populate("seller", "username email phone", User)
      .populate("bids.bidder", "username email phone", User)
      .then((currentauctionData) => {
        res.status(200).send({ currentauctionData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  auctoinRequest,
  getAuctions,
  auctionStatus,
  getCurrentAuction,
  auctionBySeller,
  deleteAuction,
  listByBidder,
};
