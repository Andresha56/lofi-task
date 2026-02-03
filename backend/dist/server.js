"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const link_routes_1 = __importDefault(require("./routes/link.routes"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const color_routes_1 = __importDefault(require("./routes/color.routes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const connect_1 = __importDefault(require("./config/connect"));
// Load environment variables
dotenv_1.default.config();
// Read in port to spin up server
let port;
if (process.env.PORT) {
    port = process.env.PORT;
}
else {
    port = "4000"; // Default to port 4000
}
// Instantiate express app and use built-in middleware
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes middleware
app.use("/api/users", user_routes_1.default);
app.use("/api/tasks", task_routes_1.default);
app.use("/api/links", link_routes_1.default);
app.use("/api/colors", color_routes_1.default);
// Custom error handler middleware ()
app.use(errorHandler_1.default);
// if (process.env.ENV !== "test") {
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    (0, connect_1.default)();
});
// }
exports.default = app;
