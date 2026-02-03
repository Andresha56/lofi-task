"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const color_controller_1 = __importDefault(require("../controllers/color.controller"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/", authMiddleware_1.verifyToken, color_controller_1.default.getColors);
router.put("/:id", authMiddleware_1.verifyToken, color_controller_1.default.updateColor);
exports.default = router;
