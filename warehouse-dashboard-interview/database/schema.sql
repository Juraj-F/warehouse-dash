DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(30) NOT NULL DEFAULT 'operator',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  status VARCHAR(30) NOT NULL DEFAULT 'open',
  priority VARCHAR(30) NOT NULL DEFAULT 'medium',
  zone VARCHAR(50),
  assigned_to INTEGER REFERENCES users(id),
  due_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT valid_status CHECK (status IN ('open', 'in_progress', 'blocked', 'completed')),
  CONSTRAINT valid_priority CHECK (priority IN ('low', 'medium', 'high', 'urgent'))
);
