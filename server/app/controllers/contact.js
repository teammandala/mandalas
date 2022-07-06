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

const contactStatus = async (req, res, next) => {
  try {
    const id = req.params.id;
    await contact.findByIdAndUpdate(
      id,
      { $set: { status: req.body.status } },
      { new: true }
    ).then((contact) => {
      res.status(201).send({
        contact,
        message: `Contact status changed to  ${req.body.status}`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};


module.exports = {
  contactRequest,
  contactStatus,
};
