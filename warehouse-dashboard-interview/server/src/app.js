import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

export default app;
