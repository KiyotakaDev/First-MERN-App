import Task from '../models/task.model.js'

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id })
  res.json(tasks)
}

export const getTask = async (req, res) => {}

export const createTask = async (req, res) => {}

export const updateTask = async (req, res) => {}

export const deleteTask = async (req, res) => {}
