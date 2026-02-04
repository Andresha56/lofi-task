import express from "express";
import controller from "../controllers/link.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, controller.getLinks);
router.post("/", verifyToken, controller.createLink);
router.put("/:id", verifyToken, controller.updateLink);
router.delete("/:id", verifyToken, controller.deleteLink);

export default router;
