import jwt from 'jsonwebtoken';

export async function loginUser({ email, password }) {
  // TODO: replace this starter logic with database lookup + password check.
  if (email !== 'operator@example.com' || password !== 'password123') {
    const error = new Error('Invalid credentials');
    error.status = 401;
    throw error;
  }

  const user = {
    id: 1,
    name: 'Warehouse Operator',
    email,
    role: 'operator'
  };

  const token = jwt.sign(user, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });
  return { token, user };
}
