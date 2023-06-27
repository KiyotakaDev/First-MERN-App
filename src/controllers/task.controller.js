import Task from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  return res.json(tasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.paramas.id);
  if (!task) return res.status(400).json({ message: "Task not found" });
  return res.json(task);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
  });
  const taskSaved = await newTask.save();
  return res.json(taskSaved);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(400).json({ message: "Task not found" });
  return res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(400).json({ message: "Task not found" });
  return res.sendStatus(204);
};
