# API Reference

Base URL: `http://localhost:4000/api`

## Auth

### POST `/login`

Request:

```json
{
  "email": "operator@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt-token",
  "user": {
    "id": 1,
    "name": "Warehouse Operator",
    "email": "operator@example.com",
    "role": "operator"
  }
}
```

## Tasks

### GET `/tasks`

Query params:

- `search`
- `status`
- `priority`
- `page`
- `limit`

### POST `/tasks`

### GET `/tasks/:id`

### PATCH `/tasks/:id`

### DELETE `/tasks/:id`
