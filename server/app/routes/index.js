const express = require("express");
const router = express.Router();
const user = require("../controllers/users");

// user router
router.use("/api/auth", user);

module.exports = router;
