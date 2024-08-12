// frontend/src/api.js (create this file for API calls)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update to your backend URL
});

export default api;