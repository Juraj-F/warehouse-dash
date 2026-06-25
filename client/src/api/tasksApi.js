import httpClient from './httpClient.js';

export async function getTasks(params) {
  const response = await httpClient.get('/tasks', { params });
  return response.data;
}

export async function getTask(id) {
  const response = await httpClient.get(`/tasks/${id}`);
  return response.data;
}

export async function createTask(payload) {
  const response = await httpClient.post('/tasks', payload);
  return response.data;
}

export async function updateTask(id, payload) {
  const response = await httpClient.patch(`/tasks/${id}`, payload);
  return response.data;
}

export async function deleteTask(id) {
  const response = await httpClient.delete(`/tasks/${id}`);
  return response.data;
}
