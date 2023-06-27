import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

export const app = express();

app.set("port", 3000);
export const port = app.get("port");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRoutes);
