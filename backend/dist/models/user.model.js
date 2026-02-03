"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define schema for user collection
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
    },
    name: { type: String, requried: [true, "Please add a name"] },
    password: { type: String, required: [true, "Please add a password"] },
}, { timestamps: true });
// Create mongoose model object from schema
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
