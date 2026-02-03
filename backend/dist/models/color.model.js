"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define schema for color collection
const colorSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        // Each color has a reference to the User model
        ref: "User",
    },
    backgroundColor: { type: String, default: "white", required: true },
    primaryTextColor: { type: String, default: "black", required: true },
    secondaryTextColor: { type: String, default: "lightgrey", required: true },
}, { timestamps: true });
// Create mongoose model object from schema
const Color = mongoose_1.default.model("Color", colorSchema);
exports.default = Color;
