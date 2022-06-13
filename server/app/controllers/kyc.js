const express = require("express");
const router = express.Router();
const KYC = require("../models/kyc");

// router for kyc request
const kycRequest = async (req, res) => {
  try {
    const { fullName, email, phone, address, country, user } = req.body;
    const idImage = req.file.path;
    const newKYC = new KYC({
      fullName,
      email,
      phone,
      address,
      country,
      user,
      idImage,
    });

    let kycAlreadyRequested = await KYC.findOne({ user: user });
    if ((!fullName, !email, !phone, !address, !country, !user, !idImage)) {
      return res.status(400).send({ message: "all fields are required!" }).next;
    } else if (kycAlreadyRequested) {
      return res
        .status(400)
        .send({ message: "You have already requested for kyc verification!" })
        .next;
    }

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
};

module.exports = { kycRequest };
