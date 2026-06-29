import httpClient from './httpClient.js';

export async function getTasks(params) {
  const response = await httpClient.get('/tasks', { params });
  return response.data;
}

export async function getTaskId(id) {
  const response = await httpClient.get(`/tasks/${id}`);
  return response.data;
}

export async function createTask(form) {
  const response = await httpClient.post('/tasks', form);
  return response.data;
}

export async function updateTask(id, form) {
  const response = await httpClient.patch(`/tasks/${id}`, form);
  return response.data;
}

export async function deleteTask(id) {
  const response = await httpClient.delete(`/tasks/${id}`);
  return response.data;
}
