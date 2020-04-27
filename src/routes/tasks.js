import { Router } from "express";
import {
  createTask,
  getTasks,
  getOneTask,
  deleteOneTask,
  updateTask,
} from "../controllers/task.controller";

const router = Router();

// /tasks
router.post("/", createTask);

router.get("/", getTasks);

// /tasks/:taskId
router.get("/:id", getOneTask);
router.delete("/:id", deleteOneTask);
router.put("/:id", updateTask);

export default router;
