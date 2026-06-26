import jwt from 'jsonwebtoken';
import {db} from '../db/connection.js'

export async function loginUser({ email, password }) {
  console.log('email and pass in service', email,password)
  // TODO: replace this starter logic with database lookup + password check.
  const result = await db.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  const user = result.rows[0];


  // if (email !== 'operator@example.com' || password !== 'password123') {
  //   const error = new Error('Invalid credentials');
  //   error.status = 401;
  //   throw error;
  // }

  // const user = {
  //   id: result.id,
  //   name: result.name,
  //   email,
  //   role: result.role
  // };

  const token = jwt.sign(user, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });
  return { token, user };
}
