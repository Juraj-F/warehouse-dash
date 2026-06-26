import httpClient from './httpClient.js';

export async function login(credentials) {
  console.log('credentials',credentials)
  const response = await httpClient.post('/login', credentials);
  return response.data;
}
