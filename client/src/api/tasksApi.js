import httpClient from './httpClient.js';

export async function getTasks(params) {
  const response = await httpClient.get('/tasks', { params });
  console.log("response in api helper",response)
  return response.data;
}

export async function getTaskId(id) {
  console.log("id in api helper", id)
  const response = await httpClient.get(`/tasks/${id}`);
  console.log("response in api helper returned from controller", response.data)
  return response.data;
}

export async function createTask(form) {
  console.log("payload in api helper", form)
  const response = await httpClient.post('/tasks', form);
  console.log("response in api helper", response.data)
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
