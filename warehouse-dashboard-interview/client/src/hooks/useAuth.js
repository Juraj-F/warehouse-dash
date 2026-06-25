import { useState } from 'react';
import { clearAuth, getToken, getUser, saveAuth } from '../utils/authStorage.js';

export function useAuth() {
  const [user, setUser] = useState(getUser());

  function setSession(authData) {
    saveAuth(authData);
    setUser(authData.user);
  }

  function logout() {
    clearAuth();
    setUser(null);
  }

  return {
    user,
    token: getToken(),
    isAuthenticated: Boolean(getToken()),
    setSession,
    logout,
  };
}
