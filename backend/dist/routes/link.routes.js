"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const link_controller_1 = __importDefault(require("../controllers/link.controller"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/", authMiddleware_1.verifyToken, link_controller_1.default.getLinks);
router.post("/", authMiddleware_1.verifyToken, link_controller_1.default.createLink);
router.put("/:id", authMiddleware_1.verifyToken, link_controller_1.default.updateLink);
router.delete("/:id", authMiddleware_1.verifyToken, link_controller_1.default.deleteLink);
exports.default = router;
