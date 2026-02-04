import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import linkRoutes from "./routes/link.routes.js";
import taskRoutes from "./routes/task.routes.js";
import colorRoutes from "./routes/color.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/connect.js";

dotenv.config();

const port = process.env.PORT || "4000";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes middleware
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/links", linkRoutes);
app.use("/api/colors", colorRoutes);

// Custom error handler middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  connectDB();
});

export default app;
