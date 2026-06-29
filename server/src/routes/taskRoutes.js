import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth.js';
import {
  createTaskController,
  deleteTaskController,
  getTaskIdController,
  listTasksController,
  updateTaskController
} from '../controllers/taskController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use(requireAuth);
router.get('/', authenticate, listTasksController);
router.post('/',authenticate, createTaskController);
router.get('/:id', authenticate, getTaskIdController);
router.patch('/:id',authenticate, updateTaskController);
router.delete('/:id', authenticate, deleteTaskController);

export default router;
