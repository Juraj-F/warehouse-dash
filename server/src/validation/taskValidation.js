export function validateTaskPayload(payload) {
  const errors = [];

  if (!payload.title || payload.title.trim().length < 3) {
    errors.push('Title must be at least 3 characters.');
  }

  return errors;
}
