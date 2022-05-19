import { Router } from "express";
import { TaskController } from "../controllers";

const taskRouter = Router();

taskRouter.post("/", TaskController.create);
taskRouter.get("/:id?", TaskController.getAllProducts, TaskController.get);
taskRouter.delete("/:id", TaskController.get, TaskController.delete);
taskRouter.patch("/:id", TaskController.get, TaskController.patch);

export default taskRouter;
