// src/services/api.js
import axios from 'axios';

// 🔹 UPDATED: Smart BASE_URL
// - In local development (npm run dev): Uses '/api' → Vite proxy handles it (no CORS issues)
// - In production (deployed on Vercel): Uses your live backend URL
const BASE_URL = import.meta.env.DEV
  ? '/api'  // ← Proxied automatically by Vite to http://127.0.0.1:8000
  : 'https://devops-backend.onrender.com/api';  // ← CHANGE THIS to your actual deployed backend URL

console.log('🔧 Current Environment:', import.meta.env.MODE);
console.log('🔧 API Base URL:', BASE_URL);

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Remove withCredentials if you're not using Django sessions/cookies
  // (your current login stores user in localStorage → stateless)
});

// Keep useful request/response logging (great for debugging)
API.interceptors.request.use(
  (config) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 AXIOS REQUEST');
    console.log('Method:', config.method?.toUpperCase());
    console.log('Full URL:', config.baseURL + config.url);
    console.log('Data:', config.data);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ AXIOS RESPONSE SUCCESS');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    return response;
  },
  (error) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('❌ AXIOS RESPONSE ERROR');
    
    if (error.response) {
      // Server responded with error (e.g., 400, 401)
      const errorMessage = error.response.data?.error ||
                          error.response.data?.message ||
                          `Server error: ${error.response.status}`;
      console.log('Server Error:', errorMessage);
      throw new Error(errorMessage);
      
    } else if (error.request) {
      // No response received → most common: Django server not running
      console.log('No response from backend');
      console.log('→ Make sure: python manage.py runserver is running');
      throw new Error('Cannot connect to backend. Start Django server with: python manage.py runserver');
      
    } else {
      // Other error
      console.log('Request failed:', error.message);
      throw new Error(error.message || 'Network error');
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  }
);

export const authAPI = {
  signup: async (data) => {
    console.log('📝 Calling signup API...');
    const res = await API.post('/signup/', data);
    return res.data;
  },
  
  login: async (data) => {
    console.log('🔐 Calling login API...');
    const res = await API.post('/login/', data);
    return res.data;
  },
};

export default API;