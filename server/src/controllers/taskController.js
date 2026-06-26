import { listTasksService } from "../services/taskService.js";

export async function listTasksController(req, res, next) {
  console.log("list tasks activated")
  try {
        const result = await listTasksService();
        res.json({ result });
  } catch (error) {
    next(error);
  }
}

export async function getTaskController(req, res, next) {
  try {
    res.json({ message: 'TODO: get task by id' });
  } catch (error) {
    next(error);
  }
}

export async function createTaskController(req, res, next) {
  try {
    res.status(201).json({ message: 'TODO: create task' });
  } catch (error) {
    next(error);
  }
}

export async function updateTaskController(req, res, next) {
  try {
    res.json({ message: 'TODO: update task' });
  } catch (error) {
    next(error);
  }
}

export async function deleteTaskController(req, res, next) {
  try {
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
