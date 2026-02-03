"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const color_model_1 = __importDefault(require("../models/color.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
// @desc    Get colors
// @route   GET /api/colors
// @access  Private
const getColors = (0, express_async_handler_1.default)(async (req, res) => {
    // Destructure colors because there can only be one colors resource per user
    const [colors] = await color_model_1.default.find({ user: req.user.id });
    res.status(200).json(colors);
});
// @desc    Update a color
// @route   PUT /api/colors/:id
// @access  Private
const updateColor = (0, express_async_handler_1.default)(async (req, res) => {
    const color = await color_model_1.default.findById(req.params.id);
    if (!color) {
        res.status(404);
        throw new Error("Color not found");
    }
    // Check that user exists
    const user = await user_model_1.default.findById(req.user.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    // Ensure logged in user matches color user
    if (color.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedColor = await color_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedColor);
});
exports.default = {
    getColors,
    updateColor,
};
