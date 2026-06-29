import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearAuth } from '../utils/authStorage.js';

export default function AppLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    clearAuth();
    navigate('/login');
  }

  return <Outlet />
}
