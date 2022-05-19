import { Router } from "express";
import TaskRoute from "./TaskRoute";

const route = Router();

route.use("/task", TaskRoute);

export default route;
