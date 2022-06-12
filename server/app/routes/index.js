const express = require("express");
const router = express.Router();
const user = require("../controllers/users");
const kyc = require("../controllers/kyc");
const auction = require("../controllers/auction");

// user routes
router.use("/api/auth", user);

// kyc routes
router.use("/api/kyc", kyc);

// auctio routes
router.use("/api/auction", auction);

module.exports = router;
