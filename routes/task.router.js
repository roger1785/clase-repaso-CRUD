import { Router } from "express";

const router = Router();

import {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

router.post("/", createTask);
router.get("/", getTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
