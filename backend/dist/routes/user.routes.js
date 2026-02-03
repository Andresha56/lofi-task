"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/me", authMiddleware_1.verifyToken, user_controller_1.default.getCurrentUser);
router.post("/", user_controller_1.default.registerUser);
router.post("/login", user_controller_1.default.loginUser);
router.put("/:id", authMiddleware_1.verifyToken, user_controller_1.default.updateUser);
router.delete("/:id", authMiddleware_1.verifyToken, user_controller_1.default.deleteUser);
exports.default = router;
