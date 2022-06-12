const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// route for user registration
const register = async (req, res, next) => {
  const { username, name, email, phone, password } = req.body;

  try {
    let userWithEmail = await User.findOne({ email: email });
    let userWithUsername = await User.findOne({ username: username });

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
    } else if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "password must be at least 6 character!" }).next;
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
      .then(() => res.status(201).send({ message: `registration successful` }))
      .catch((err) => res.status(400).send({ message: err.message }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// route for user login

const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await await User.findOne({ username: username });

    if (!user) {
      return res.status(400).send({ message: `invalid login credentials!` })
        .next;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!username || !password) {
      return res
        .status(400)
        .send({ message: `not all fields have been entered!` }).next;
    } else if (!isMatch) {
      return res.status(400).send({ message: `Invalid credentials!` }).next;
    }

    // return data in jwt
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token, user, message: `login success!` });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// module.exports = router;
module.exports = { register, login };
