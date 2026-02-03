"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const link_model_1 = __importDefault(require("../models/link.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
// @desc    Get links
// @route   GET /api/links
// @access  Private
const getLinks = (0, express_async_handler_1.default)(async (req, res) => {
    const links = await link_model_1.default.find({ user: req.user.id });
    res.status(200).json(links);
});
// @desc    Create a new link
// @route   POST /api/links
// @access  Public
const createLink = (0, express_async_handler_1.default)(async (req, res) => {
    if (!req.body.url) {
        res.status(400);
        throw new Error("Please add a url field");
    }
    const link = await link_model_1.default.create({
        url: req.body.url,
        title: req.body.title,
        user: req.user.id,
    });
    res.status(201).json(link);
});
// @desc    Update a link
// @route   PUT /api/links/:id
// @access  Private
const updateLink = (0, express_async_handler_1.default)(async (req, res) => {
    const link = await link_model_1.default.findById(req.params.id);
    if (!link) {
        res.status(404);
        throw new Error("Link not found");
    }
    // Check that user exists
    const user = await user_model_1.default.findById(req.user.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    // Ensure logged in user matches link user
    if (link.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedLink = await link_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedLink);
});
// @desc    Delete a link
// @route   DELETE /api/links/:id
// @access  Private
const deleteLink = (0, express_async_handler_1.default)(async (req, res) => {
    const link = await link_model_1.default.findById(req.params.id);
    if (!link) {
        res.status(404);
        throw new Error("Link not found");
    }
    // Check that user exists
    const user = await user_model_1.default.findById(req.user.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    // Ensure logged in user matches link user
    if (link.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    await link_model_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: link.id });
});
exports.default = {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
};
