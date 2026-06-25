import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearAuth } from '../utils/authStorage.js';

export default function AppLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    clearAuth();
    navigate('/login');
  }

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <h1 className="font-bold">Warehouse Operations</h1>
          <nav className="flex gap-4">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl p-4">
        <Outlet />
      </main>
    </div>
  );
}
