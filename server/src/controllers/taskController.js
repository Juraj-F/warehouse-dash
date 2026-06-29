import { listTasksService, getTaskIdService, createTaskService } from "../services/taskService.js";

export async function listTasksController(req, res, next) {
  console.log("list tasks activated")
  try {
        const result = await listTasksService();
        res.json({ result });
  } catch (error) {
    next(error);
  }
}

export async function getTaskIdController(req, res, next) {
  const id=req.params.id
  try {
    const data=await getTaskIdService({id})
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function createTaskController(req, res, next) {
  console.log("req payload", req.body)
  const payload = req.body
  try {
    const data = await createTaskService({payload})
    res.status(201).json(data);
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
