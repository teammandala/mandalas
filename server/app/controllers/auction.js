const express = require("express");
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

const auctionStatus = async (req, res, next) => {
  try {
    await Auction.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    }).then((res) => {
      res.status(200).send({ message: `auction approved!!` });
    });
  } catch (err) {
    res.status(500).sent("server error!!");
  }
};

module.exports = { auctoinRequest, getAuctions, auctionStatus };
