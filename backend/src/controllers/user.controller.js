import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import brcrypt from "bcrypt";
import User from "../models/user.model.js";
import Color from "../models/color.model.js";
import Link from "../models/link.model.js";

// Function to generate JWT
const generateToken = (id) => {
  if (process.env.JWT_SECRET) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  }
  throw new Error("JWT_SECRET not recognised");
};

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const registerUser = asyncHandler(async (req, res) => {
  // Check existence of all field inputs
  const { email, name, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check user existence
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await brcrypt.genSalt(10);
  const hashedPassword = await brcrypt.hash(password, salt);

  // Create user
  const user = await User.create({ email, name, password: hashedPassword });

  // Create color resource for user
  await Color.create({ user: user.id });

  // Create link resource for user
  await Link.create({ user: user.id });

  // Send response
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // If user exists and password matches
  if (user && (await brcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      /* eslint no-underscore-dangle: 0 */
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (req.user.id !== req.params.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");
  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (req.user.id !== req.params.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

export default {
  getCurrentUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
