import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authApi.js';
import { saveAuth } from '../utils/authStorage.js';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('form data', form)
      const data = await login(form);
      saveAuth(data);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded border bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Operator Login</h1>
        {error && <p className="mb-3 text-red-600">{error}</p>}
        <label className="mb-3 block">
          <span>Email</span>
          <input className="mt-1 w-full rounded border p-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </label>
        <label className="mb-4 block">
          <span>Password</span>
          <input className="mt-1 w-full rounded border p-2" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </label>
        <button className="w-full rounded bg-slate-900 p-2 text-white" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    </main>
  );
}
