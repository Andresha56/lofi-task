import express from "express";
import controller from "../controllers/task.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, controller.getTasks);
router.post("/", verifyToken, controller.createTask);
router.put("/:id", verifyToken, controller.updateTask);
router.delete("/:id", verifyToken, controller.deleteTask);

export default router;
