const Auction = require("../models/auction");

const userBid = async (req, res, next) => {
  try {
    const bidder = req.body.bidder;
    const bid = req.body.bid;
    const time = req.body.time;

    const bidUp = {
      bidder,
      bid,
      time,
    };

    const currentAuction = Auction.findById(req.params.id);
    const bidUpdate = currentAuction.bids.push(bidUp);

    // const bids = [
    //   {
    //     bidder: bidder,
    //     bid: bid,
    //     time: time,
    //   },
    // ];

    await bidUpdate.save().then((bid) => {
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
