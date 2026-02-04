import express from "express";
import controller from "../controllers/color.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, controller.getColors);
router.put("/:id", verifyToken, controller.updateColor);

export default router;
