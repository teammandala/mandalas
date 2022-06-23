const express = require("express");
const router = express.Router();
const user = require("../controllers/users");
const kyc = require("../controllers/kyc");
const auction = require("../controllers/auction");
const isAuth = require("../middleware/auth");
const upload = require("../utils/kycUpload");
const kycUpload = require("../utils/auctionUpload");
const avatarUpload = require("../utils/avatarUpload");
const carouselUpload = require("../utils/carouselUpload");
const carousel = require("../controllers/carousel");

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
router.post(
  "/api/auth/avatar/:id",
  user.avatarUpdate,
  avatarUpload.single("avatar"),
  isAuth
);
router.get("/api/auth/getalluser", user.getAllUser);
router.put("/api/auth/role/:id", user.roleUpdate);
router.delete("/api/auth/delete/:id", user.deleteUser);

// kyc routes
router.use(
  "/api/kyc/request",
  upload.single("idImage"),
  kyc.kycRequest,
  isAuth
);
router.put("/api/kyc/status/:id", kyc.kycStatusUpdate);

// auctio routes
router.use(
  "/api/auction/request",
  kycUpload.single("image"),
  auction.auctoinRequest,
  isAuth
);

router.put("/api/auction/status/:id", auction.auctionStatus);

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
