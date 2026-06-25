import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../..');
const databaseDir = path.resolve(rootDir, '../database');

const schema = fs.readFileSync(path.join(databaseDir, 'schema.sql'), 'utf8');
const seed = fs.readFileSync(path.join(databaseDir, 'seed.sql'), 'utf8');

db.exec(`${schema}\n${seed}`, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log('Database setup complete');
  db.close();
});
