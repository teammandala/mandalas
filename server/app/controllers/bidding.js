const { findByIdAndUpdate } = require("../models/auction");
const Auction = require("../models/auction");

const userBid = async (req, res, next) => {
  try {
    const bidder = req.body.bidder;
    const bid = req.body.bid;
    const time = req.body.time;

    const bids = [
      {
        bidder: bidder,
        bid: bid,
        time: time,
      },
    ];

    await Auction.findByIdAndUpdate(req.params.id, { $set: bids }).then(
      (bid) => {
        res.status(201).send({
          bid,
          message: `bid updated successfully!!`,
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error: ${err.message}`);
  }
};

module.exports = { userBid };
