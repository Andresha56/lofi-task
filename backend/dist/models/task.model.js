"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define schema for user collection
const taskSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        // Each goal has a reference to the User model
        ref: "User",
    },
    text: { type: String, required: true },
    isDone: { type: Boolean, required: true },
}, { timestamps: true });
// Create mongoose model object from schema
const Task = mongoose_1.default.model("Task", taskSchema);
exports.default = Task;
