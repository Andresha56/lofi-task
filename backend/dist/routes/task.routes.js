"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/", authMiddleware_1.verifyToken, task_controller_1.default.getTasks);
router.post("/", authMiddleware_1.verifyToken, task_controller_1.default.createTask);
router.put("/:id", authMiddleware_1.verifyToken, task_controller_1.default.updateTask);
router.delete("/:id", authMiddleware_1.verifyToken, task_controller_1.default.deleteTask);
exports.default = router;
