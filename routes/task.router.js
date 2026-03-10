import { Router } from "express";

const router = Router();

import Task from "../models/Task";

router.get("/task", async (req, res) => {
  const task = await Task.find();
});

export default router;

