import Joi from "joi";

export const Task = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  startDate: Joi.date().required(),
  startTime: Joi.string()
    .regex(/^([0-9]{2}):([0-9]{2})$/)
    .required(),
  finishDate: Joi.date().required(),
  finishTime: Joi.string()
    .regex(/^([0-9]{2}):([0-9]{2})$/)
    .required(),
});

export const UpdatedTask = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  startDate: Joi.date(),
  startTime: Joi.string(),
  finishDate: Joi.date(),
  finishTime: Joi.string(),
});

export type TaskType = {
  name: string;
  description: string;
  startDate: Date;
  startTime: string;
  finishDate: Date;
  finishTime: string;
};
