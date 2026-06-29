import axios from 'axios';
import { clearAuth, getToken } from '../utils/authStorage.js';

const httpClient = axios.create({
  baseURL: 'http://localhost:4000/api'
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


httpClient.interceptors.response.use(
  response => response,
  error=> {
    if(error.response?.status===401){
      clearAuth(),
      window.location.href="/login"
    }
  return Promise.reject(error);})


export default httpClient;
