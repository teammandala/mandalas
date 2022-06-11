const express = require("express");
const router = express.Router();
const KYC = require("../models/kyc");

// router for kyc request
router.post("/request", async (req, res) => {
  const { fullName, phone, address, user } = req.body;
  const idImage = req.file.path;

  try {
    const newKYC = new KYC({
      fullName,
      phone,
      address,
      user,
      idImage,
    });

    await newKYC
      .save()
      .then((result) =>
        res.status(201).send({ message: `KYC request successful` })
      )
      .catch((err) => res.status(400).send({ message: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
