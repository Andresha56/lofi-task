import asyncHandler from "express-async-handler";
import Task from "../models/task.model.js";

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

const createTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const task = await Task.create({
    user: req.user.id,
    text: req.body.text,
    isDone: false,
  });
  res.status(201).json(task);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
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
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
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
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
