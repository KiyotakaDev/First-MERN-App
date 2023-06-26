import express from "express";
import morgan from "morgan";

export const app = express();

app.set("port", 3000);
export const port = app.get("port");

app.use(morgan("dev"));
