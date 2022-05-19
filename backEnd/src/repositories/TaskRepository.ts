import { EntityRepository, Repository } from "typeorm";
import { Task } from "../models";
import { UpdatedTask, TaskType } from "../DTOs";

@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {
  public async findById(id: string): Promise<Task | Error> {
    try {
      const task = await this.findOne(id);

      return task;
    } catch (error) {
      return new Error(error);
    }
  }

  public async findByName(name: string): Promise<Task | false | string> {
    try {
      const task = await this.findOne({ where: { name } });

      if (!task) {
        return false;
      }

      return task;
    } catch (error) {
      return error.severity || error;
    }
  }

  public async getAllTasks(): Promise<Task[] | string> {
    try {
      const arrayTasks = await this.find();

      return arrayTasks;
    } catch (error) {
      return error.severity || error;
    }
  }

  public async deleteTask(id: string): Promise<{ message: string } | Error> {
    try {
      await this.delete(id);

      return { message: "Task deleted successfully!" };
    } catch (error) {
      return new Error(error);
    }
  }

  public async updateTask(id: string, task: TaskType): Promise<Task | Error> {
    try {
      UpdatedTask.validate(task);

      await this.update(id, task);
      const taskObject = await this.findById(id);

      return taskObject;
    } catch (error) {
      return new Error(error);
    }
  }
}
