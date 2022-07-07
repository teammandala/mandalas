const express = require("express");
const router = express.Router();
const user = require("../controllers/users");
const kyc = require("../controllers/kyc");
const contact = require("../controllers/contact");
const auction = require("../controllers/auction");
const isAuth = require("../middleware/auth");
const upload = require("../utils/kycUpload");
const kycUpload = require("../utils/auctionUpload");
const avatarUpload = require("../utils/avatarUpload");
const carouselUpload = require("../utils/carouselUpload");
const carousel = require("../controllers/carousel");
const bid = require("../controllers/bidding");
// user routes
// router.use("/api/auth", user);
router.post("/api/auth/register", user.register);
router.post("/api/auth/login", user.login);

router.put(
  "/api/auth/profile/:id",
  user.profileUpdate,
  // avatarUpload.single("avatar"),
  isAuth
);
router.post(
  "/api/auth/avatar/:id",
  avatarUpload.single("avatar"),
  user.avatarUpdate,
  isAuth
);
router.use(
  "/api/contact/request",
  upload.single("idImage"),
  contact.contactRequest
);

router.get("/api/auth/getalluser", user.getAllUser);
router.get("/api/contact/getallcontact", user.getAllContact);
router.put("/api/auth/role/:id", user.roleUpdate);
router.delete("/api/auth/delete/:id", user.deleteUser);

// bid routes
router.put("/api/bid/update/:id", bid.userBid);

// kyc routes
router.use(
  "/api/kyc/request",
  upload.single("idImage"),
  kyc.kycRequest,
  isAuth
);
router.put("/api/kyc/status/:id", kyc.kycStatusUpdate);
router.get("/api/kyc/getdata/:id", kyc.getCurrentUserKYC);

// auctio routes
router.use(
  "/api/auction/request",
  kycUpload.single("image"),
  auction.auctoinRequest,
  isAuth
);

router.put("/api/auction/status/:id", auction.auctionStatus);

router.put("/api/contact/status/:id", contact.contactStatus);

router.get("/api/auction/getdata", auction.getAuctions);
router.get("/api/auction/getdata/:id", auction.getCurrentAuction);

router.get("/api/kyc/getdata", kyc.getKYCRequest);

// carousel routes

router.use(
  "/api/carousel/request",
  carouselUpload.single("image"),
  carousel.carouselRequest,
  isAuth
);

router.get("/api/carousel/getdata", carousel.getCarousel);

router.delete("/api/carousel/delete/:id", carousel.deleteCarousel);

module.exports = router;
