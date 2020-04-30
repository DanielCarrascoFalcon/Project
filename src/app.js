import express, { json } from "express";

// Importing routes
import taskRoutes from "./routes/tasks";

// initialization
const app = express();

// Middlewares
app.use(json());

// Routes
app.use("/api/tasks", taskRoutes);

export default app;
