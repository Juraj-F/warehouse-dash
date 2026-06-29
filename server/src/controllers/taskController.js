import { listTasksService, getTaskIdService, createTaskService, updateTaskService, deleteTaskService } from "../services/taskService.js";

export async function listTasksController(req, res, next) {
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
  const payload = req.body
  try {
    const data = await createTaskService({id,payload})
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
}

export async function updateTaskController(req, res, next) {
    const payload = req.body
    const id = req.params.id
  try {
    const data = await updateTaskService({id, payload})
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
}

export async function deleteTaskController(req, res, next) {
  const id = req.params.id
  try {
    const response = await deleteTaskService(id)

    res.status(204).json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    next(error);
  }
}
