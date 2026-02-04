/* eslint-disable import/prefer-default-export */
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

// This middleware verifies whether or not a JWT can be decoded to match an existing id within the DB
export const verifyToken = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token (second element) from header (which looks like "Bearer <token goes here>")
      [, token] = req.headers.authorization.split(" ");

      // Verify token
      let decoded;
      if (process.env.JWT_SECRET) {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      } else {
        throw new Error("JWT_SECRET not recognised");
      }

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      // If user extracted from token is null (not found in DB), throw an error
      if (req.user === null) throw new Error();
      next();
    } catch (err) {
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
