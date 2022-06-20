const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { find } = require("../models/user");

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

const profileUpdate = async (req, res, next) => {
  try {
    const tempUser = await User.findById(req.params.id);
    if (!tempUser) return res.status(404).json({ message: "No such user." });

    let avatarPath = null;
    if (req.file) {
      avatarPath = req.file.filename;
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser && existingUser.id !== tempUser.id) {
      return res.status(400).json({ message: "Username alredy taken." });
    }

    const updatedUser = {
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      bio: req.body.bio,
      avatar: avatarPath,
    };
    // remove '', null, undefined
    Object.keys(updatedUser).forEach(
      (k) =>
        !updatedUser[k] && updatedUser[k] !== undefined && delete updatedUser[k]
    );
    console.log(req.body, updatedUser);
    const user = await User.findByIdAndUpdate(
      tempUser.id,
      { $set: updatedUser },
      { new: true }
    ).then((user) => {
      res.status(201).send({ user, message: `user updated successfully` });
    });

    // res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    await User.find().then((user) => {
      res.status(200).send({ user });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const avatarUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id, req.file.filename);
    await User.findByIdAndUpdate(
      id,
      { $set: { avatar: req.file.path } },
      { new: true }
    ).then((user) => {
      res.status(201).send({
        user,
        message: `new avatar uploaded!!`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const roleUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.findByIdAndUpdate(
      id,
      { $set: { role: req.body.role } },
      { new: true }
    ).then((user) => {
      res.status(201).send({
        user,
        message: `user role updated successfully!!`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id).then(() => {
      res.status(201).send({
        message: `user deleted successfully`,
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

// module.exports = router;
module.exports = {
  register,
  login,
  profileUpdate,
  getAllUser,
  avatarUpdate,
  roleUpdate,
  deleteUser,
};
