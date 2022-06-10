const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  const { username, name, email, phone, password } = req.body;

  try {
    let userWithEmail = await User.findOne({ email });
    let userWithUsername = await User.findOne({ username });

    if (userWithEmail) {
      return res
        .status(400)
        .send({ message: "User with email already exists!" }).next;
    } else if (userWithUsername) {
      return res
        .status(400)
        .send({ message: "User with username already exists!" }).next;
    } else if (!username || !name || !email || !phone || !password) {
      return res.status(400).send({ message: "Fields can't be empty!" }).next;
    }

    const newUser = new User({
      username,
      name,
      email,
      phone,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser
      .save()
      .then((result) =>
        res
          .status(201)
          .send({ message: `registration successful \n ${result}` })
      )
      .catch((err) => res.status(400).send({ message: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
