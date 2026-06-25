import { dbGet } from '../db/database.js';

export async function findUserByEmail(email) {
  return dbGet('SELECT * FROM users WHERE email = ?', [email]);
}

export async function findUserById(id) {
  return dbGet('SELECT id, name, email FROM users WHERE id = ?', [id]);
}
