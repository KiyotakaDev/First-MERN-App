import { Router } from "express";
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

import { authRequired } from "../middlewares/authValidator.js";

const router = Router();

router.get("/tasks", authRequired, getAllTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, createTask);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
