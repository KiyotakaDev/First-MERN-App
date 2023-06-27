import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from './routes/task.routes.js'

export const app = express();

app.set("port", 3000);
export const port = app.get("port");

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())

app.use("/api", authRoutes);
app.use("/api", taskRoutes);
