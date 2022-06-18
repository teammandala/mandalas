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

const getKYCRequest = async (req, res) => {
  try {
    await KYC.find()
      .then((kycData) => {
        res.status(200).send({ kycData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {}
};

const getUcrrentUserKYC = async (req, res) => {
  try {
    const user = req.body.user;

    let isKYCAvailable = await KYC.findOne({ user: user });

    if (!isKYCAvailable) {
      return res.status(400).send({
        message:
          "You have not request for kyc!, please request for kyc verification to request for auction",
      }).next;
    }
    res.status(200).send({ isKYCAvailable });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { kycRequest, getKYCRequest, getUcrrentUserKYC };
