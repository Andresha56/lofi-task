"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const linkSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        // Each color has a reference to the User model
        ref: "User",
    },
    url: {
        type: String,
        required: true,
        default: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    },
    title: {
        type: String,
        required: true,
        default: "lofi- beats to relax/ study/ work",
    },
}, { timestamps: true });
const Link = mongoose_1.default.model("Link", linkSchema);
exports.default = Link;
