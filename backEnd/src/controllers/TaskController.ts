import { NextFunction, Request, Response } from "express";
import { TaskRepository } from "../repositories";
import { getCustomRepository } from "typeorm";
import { Task, TaskType } from "../DTOs";

class TaskController {
  public async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const taskRepository = getCustomRepository(TaskRepository);

      if (!id) {
        const tasks = await taskRepository.getAllTasks();

        return res.status(200).json({ data: tasks, message: "Everything is all right!" });
      }

      return next();
    } catch (error) {
      return next({
        status: 400,
        message: error,
      });
    }
  }

  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const taskRepository = getCustomRepository(TaskRepository);

      const task = await taskRepository.findById(id);

      if (!task) {
        return next({
          status: 400,
          message: "Task not found!",
        });
      }

      if (task instanceof Error) {
        return next({
          status: 400,
          message: task.message,
        });
      }

      res.locals = {
        status: 200,
        data: task,
        message: "Everything is all right!",
      };

      return next();
    } catch (error) {
      return next({
        status: 400,
        message: error,
      });
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description, startDate, startTime, finishDate, finishTime }: TaskType =
        req.body;
      const taskRepository = getCustomRepository(TaskRepository);
      const taskObject = { name, description, startDate, startTime, finishDate, finishTime };

      const { error } = Task.validate(taskObject);

      if (error) {
        return next({
          status: 400,
          message: error.details,
        });
      }

      const checkName = await taskRepository.findByName(name);

      if (checkName) {
        return next({
          status: 400,
          message: "This name already exists!",
        });
      }

      const task = await taskRepository.save(taskObject);

      res.locals = {
        status: 201,
        data: task,
        message: "Everything is all right!",
      };

      return next();
    } catch (error) {
      return next({
        status: 400,
        message: error,
      });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const taskRepository = getCustomRepository(TaskRepository);

      const task = await taskRepository.deleteTask(id);

      if (task instanceof Error) {
        return next({
          status: 400,
          message: task.message,
        });
      }

      return next({
        status: 201,
        message: task,
      });
    } catch (error) {
      return next({
        status: 400,
        message: error,
      });
    }
  }

  public async patch(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, description, startDate, startTime, finishDate, finishTime }: TaskType =
        req.body;
      const taskRepository = getCustomRepository(TaskRepository);

      const actualTask = await taskRepository.findById(id);
      if (actualTask instanceof Error) return;

      const taskObject = {
        name: name || actualTask.name,
        description: description || actualTask.description,
        startDate: startDate || actualTask.startDate,
        startTime: startTime || actualTask.startTime,
        finishDate: finishDate || actualTask.finishDate,
        finishTime: finishTime || actualTask.finishTime,
      };
      const task = await taskRepository.updateTask(id, taskObject);

      if (task instanceof Error) {
        return next({
          status: 400,
          message: task.message,
        });
      }

      return res.status(201).json({ data: task, message: "Task updated successfully!" });
    } catch (error) {
      return next({
        status: 400,
        message: error,
      });
    }
  }
}

export default new TaskController();
