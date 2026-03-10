import Task from "../models/Task.js";

export const getTask = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ error: "Taks not available" });
  }

  res.json(task);
};

export const createTask = async (req, res) => {
  const task = new Task(req.body);

  await task.save();

  res.status(201).json(Task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(id, req.body,{returnDocument: "after"});

  if (!updatedTask) {
    res.status(404).json({ error: "Task not found" });
  }

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    res.status(404).json({ error: "Task not found" });
  }

  res.json(deletedTask);
};
