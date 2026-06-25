# Requirements — Warehouse Operations Dashboard

## Scenario

BrightWarehouse needs an internal web dashboard for warehouse operators. Operators should log in and manage operational tasks such as moving pallets, checking inventory, resolving exceptions, and assigning work to zones.

## Required features

- Login screen
- Protected dashboard routes
- Task list page
- Create task
- Edit task
- Delete task
- Search tasks by title or description
- Filter by status
- Filter by priority
- Pagination
- REST API integration
- SQL schema and seed data
- Clear loading and error states
- Basic form validation

## Task fields

- id
- title
- description
- status: `open`, `in_progress`, `blocked`, `completed`
- priority: `low`, `medium`, `high`, `urgent`
- zone
- assigned_to
- due_date
- created_at
- updated_at

## Bonus features

- Docker setup
- Unit tests
- Responsive UI polish
- Optimistic updates
- Better validation
- Sort by due date or priority
- Role-based access

## Evaluation criteria

- Correctness
- Clean file structure
- Good separation of concerns
- Reusable API layer
- Readable React components
- Reasonable error handling
- Secure authentication approach
- SQL understanding
- Ability to explain decisions
