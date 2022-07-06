const { findByIdAndUpdate } = require("../models/auction");
const Auction = require("../models/auction");

const userBid = async (req, res, next) => {
  try {
    const bid = {
      bidder: req.body.bidder,
      bid: req.body.bid,
      time: Date.now(),
    };

    const auction = await Auction.findById(req.params.id);
    auction.bids.splice(0, 0, bid);
    await auction.save().then((bid) => {
      res.status(201).send({
        bid,
        message: `bid updated successfully!!`,
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error: ${err.message}`);
  }
};

module.exports = { userBid };
