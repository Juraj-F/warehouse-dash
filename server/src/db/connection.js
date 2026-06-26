// TODO: Create and export a SQLite database connection.
// Recommended package: sqlite3, better-sqlite3, or sqlite.
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {Pool} = pg

export const db = new Pool ({
connectionString: process.env.DATABASE_URL
})

export function getDb() {
  throw new Error('Database connection not implemented yet');
}


db.connect()
  .then(client => {
    console.log('✅ Connected to PostgreSQL');
    client.release();
  })
  .catch(err => {
    console.error('❌ PostgreSQL connection failed');
    console.error(err.message);
  });