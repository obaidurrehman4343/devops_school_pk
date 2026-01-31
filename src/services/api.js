import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw new Error(error.response.data?.error || 'Request failed');
    }
    if (error.request) {
      throw new Error('CORS error: Backend reachable but blocked by browser');
    }
    throw new Error(error.message);
  }
);

export const authAPI = {
  signup: async (data) => {
    const res = await API.post('/signup/', data);
    return res.data;
  },
  login: async (data) => {
    const res = await API.post('/login/', data);
    return res.data;
  },
};
