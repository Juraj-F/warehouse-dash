import { Link, Outlet, useNavigate } from 'react-router-dom';
import { clearAuth, getUser } from '../utils/authStorage.js';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const user = getUser();

  function handleLogout() {
    clearAuth();
    navigate('/login');
  }

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/tasks" className="text-xl font-semibold">Warehouse Dashboard</Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user?.name}</span>
            <button onClick={handleLogout} className="rounded border px-3 py-1 text-sm">Logout</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
