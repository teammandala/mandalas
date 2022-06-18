const express = require("express");
const router = express.Router();
const contact = require("../models/contact");

// router for contact request
const contactRequest = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    const newcontact = new contact({
      fullName,
      email,
      message,
    });

    if ((!fullName, !email, !message)) {
      return res.status(400).send({ message: "all fields are required!" }).next;
    } 

    await newcontact
      .save()
      .then((result) =>
        res.status(201).send({ message: `contact request successful` })
      )
      .catch((err) => res.status(400).send({ message: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getcontactRequest = async (req, res) => {
  try {
    await contact.find()
      .then((contactData) => {
        res.status(200).send({ contactData });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {}
};


module.exports = {
  contactRequest,
  getcontactRequest,
};
