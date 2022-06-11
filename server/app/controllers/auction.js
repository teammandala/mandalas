const express = require("express");
const router = express.Router();
const Auction = require("../models/auction");

// router for kyc request
router.post("/request", async (req, res) => {
  const { itemName, description, bidStart, bidEnd, seller, startingBid } =
    req.body;
  const image = req.file.path;

  try {
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
});

// router for kyc get all

module.exports = router;
