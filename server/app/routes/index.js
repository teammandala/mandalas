const express = require("express");
const router = express.Router();
const user = require("../controllers/users");
const kyc = require("../controllers/kyc");
const auction = require("../controllers/auction");
const isAuth = require("../middleware/auth");

// user routes
// router.use("/api/auth", user);
router.post("/api/auth/register", user.register);
router.post("/api/auth/login", user.login);

// kyc routes
router.use("/api/kyc", kyc);

// auctio routes
router.use("/api/auction", auction);

module.exports = router;
