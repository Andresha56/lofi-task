"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
/* eslint-disable import/prefer-default-export */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = __importDefault(require("../models/user.model"));
// This middleware verifies whether or not a JWT can be decoded to match an existing id within the DB
exports.verifyToken = (0, express_async_handler_1.default)(async (req, res, next) => {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get token (second element) from header (which looks like "Bearer <token goes here>")
            [, token] = req.headers.authorization.split(" ");
            // Verify token
            let decoded;
            if (process.env.JWT_SECRET) {
                decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            }
            else {
                throw new Error("JWT_SECRET not recognised");
            }
            // Get user from the token
            req.user = await user_model_1.default.findById(decoded.id).select("-password");
            // If user extracted from token is null (not found in DB), throw an error
            if (req.user === null)
                throw new Error();
            next();
        }
        catch (err) {
            res.status(401);
            throw new Error("Not authorized");
        }
    }
    // If no token is found, throw an error
    if (!token) {
        res.status(401);
        throw new Error("Not authorized. no token");
    }
});
