const express = require("express");
const router = express.Router();
const user = require("../controllers/users");
const kyc = require("../controllers/kyc");
const auction = require("../controllers/auction");
const isAuth = require("../middleware/auth");
const upload = require("../utils/kycUpload");
const kycUpload = require("../utils/auctionUpload");
const avatarUpload = require("../utils/avatarUpload");

// user routes
// router.use("/api/auth", user);
router.post("/api/auth/register", user.register);
router.post("/api/auth/login", user.login);
router.put(
  "/api/auth/profile/:id",
  user.profileUpdate,
  avatarUpload.single("avatar"),
  isAuth
);

// kyc routes
router.use(
  "/api/kyc/request",
  upload.single("idImage"),
  kyc.kycRequest,
  isAuth
);

// auctio routes
router.use(
  "/api/auction/request",
  kycUpload.single("image"),
  auction.auctoinRequest,
  isAuth
);

module.exports = router;
