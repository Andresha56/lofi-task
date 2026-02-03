"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const color_model_1 = __importDefault(require("../models/color.model"));
const link_model_1 = __importDefault(require("../models/link.model"));
// Function to generate JWT
const generateToken = (id) => {
    if (process.env.JWT_SECRET) {
        return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    }
    throw new Error("JWT_SECRET not recognised");
};
// @desc    Get current user data
// @route   GET /api/users/me
// @access  Private
const getCurrentUser = (0, express_async_handler_1.default)(async (req, res) => {
    res.status(200).json(req.user);
});
// @desc    Create new user
// @route   POST /api/users
// @access  Public
const registerUser = (0, express_async_handler_1.default)(async (req, res) => {
    // Check existence of all field inputs
    const { email, name, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    // Check user existence
    const userExists = await user_model_1.default.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    // Hash password
    const salt = await bcrypt_1.default.genSalt(10);
    const hashedPassword = await bcrypt_1.default.hash(password, salt);
    // Create user
    const user = await user_model_1.default.create({ email, name, password: hashedPassword });
    // Create color resource for user
    await color_model_1.default.create({ user: user.id });
    // Create link resource for user
    await link_model_1.default.create({ user: user.id });
    // Send response
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});
// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const user = await user_model_1.default.findOne({ email });
    // If user exists and password matches
    if (user && (await bcrypt_1.default.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            /* eslint no-underscore-dangle: 0 */
            token: generateToken(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error("Invalid credentials");
    }
});
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = (0, express_async_handler_1.default)(async (req, res) => {
    const user = await user_model_1.default.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    if (req.user.id !== req.params.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedUser = await user_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    }).select("-password");
    res.status(200).json(updatedUser);
});
// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = (0, express_async_handler_1.default)(async (req, res) => {
    const user = await user_model_1.default.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    if (req.user.id !== req.params.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    await user_model_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
});
exports.default = {
    getCurrentUser,
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
};
