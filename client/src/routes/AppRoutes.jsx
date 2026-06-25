import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import TasksPage from '../pages/TasksPage.jsx';
import TaskFormPage from '../pages/TaskFormPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<TaskFormPage />} />
          <Route path="/tasks/:id/edit" element={<TaskFormPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
