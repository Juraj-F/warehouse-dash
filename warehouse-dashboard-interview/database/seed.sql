INSERT INTO users (name, email, password_hash, role)
VALUES
  ('Warehouse Operator', 'operator@example.com', '$2a$10$replace_with_real_hash', 'operator'),
  ('Shift Lead', 'lead@example.com', '$2a$10$replace_with_real_hash', 'lead');

INSERT INTO tasks (title, description, status, priority, zone, assigned_to, due_date)
VALUES
  ('Move pallet A-102', 'Move pallet A-102 from Receiving to Storage Zone B.', 'open', 'high', 'Receiving', 1, CURRENT_DATE + INTERVAL '1 day'),
  ('Check damaged carton', 'Inspect damaged carton reported near conveyor 3.', 'blocked', 'urgent', 'Packing', 2, CURRENT_DATE),
  ('Replenish pick bins', 'Refill fast-moving SKUs in Zone C.', 'in_progress', 'medium', 'Zone C', 1, CURRENT_DATE + INTERVAL '2 days'),
  ('Cycle count aisle 4', 'Perform cycle count for aisle 4 inventory.', 'open', 'low', 'Inventory', 2, CURRENT_DATE + INTERVAL '5 days');
