import { Link, Outlet, useNavigate } from 'react-router-dom';
import { clearAuth, getUser } from '../utils/authStorage.js';

export default function MainLayout() {
  const navigate = useNavigate();
  const user = getUser();

  function handleLogout() {
    clearAuth();
    navigate('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/dashboard" className="font-bold">Warehouse Dashboard</Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/tasks">Tasks</Link>
            <span>{user?.name}</span>
            <button onClick={handleLogout} className="rounded border px-3 py-1">Logout</button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
