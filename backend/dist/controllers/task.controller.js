"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const task_model_1 = __importDefault(require("../models/task.model"));
// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = (0, express_async_handler_1.default)(async (req, res) => {
    const tasks = await task_model_1.default.find({ user: req.user.id });
    res.status(200).json(tasks);
});
// @desc    Create a new task
// @route   POST /api/tasks
// @access  Public
const createTask = (0, express_async_handler_1.default)(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    }
    const task = await task_model_1.default.create({
        user: req.user.id,
        text: req.body.text,
        isDone: false,
    });
    res.status(201).json(task);
});
// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = (0, express_async_handler_1.default)(async (req, res) => {
    const task = await task_model_1.default.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    // Check that user exists
    if (!req.user) {
        res.status(404);
        throw new Error("User not found");
    }
    // Ensure logged in user matches task user
    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedTask = await task_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedTask);
});
// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = (0, express_async_handler_1.default)(async (req, res) => {
    const task = await task_model_1.default.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    // Check that user exists
    if (!req.user) {
        res.status(404);
        throw new Error("User not found");
    }
    // Ensure logged in user matches task user
    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    await task_model_1.default.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
});
exports.default = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};
