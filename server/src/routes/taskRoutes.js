import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import {
  createTaskController,
  deleteTaskController,
  getTaskController,
  listTasksController,
  updateTaskController
} from '../controllers/taskController.js';

const router = Router();

router.use(requireAuth);
router.get('/', listTasksController);
router.post('/', createTaskController);
router.get('/:id', getTaskController);
router.patch('/:id', updateTaskController);
router.delete('/:id', deleteTaskController);

export default router;
