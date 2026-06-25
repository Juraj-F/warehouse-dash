import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const sqlite = sqlite3.verbose();
export const db = new sqlite.Database(process.env.DATABASE_PATH || './warehouse.db');

export function dbAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) reject(error);
      else resolve(rows);
    });
  });
}

export function dbGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) reject(error);
      else resolve(row);
    });
  });
}

export function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function runCallback(error) {
      if (error) reject(error);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
}
