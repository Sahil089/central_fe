// src/services/genericService.js

import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL; // loaded from .env

// Helper: Get Bearer token
const getAuthHeader = () => {
  const token = localStorage.getItem('access_token'); // or get from Redux
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Create axios instance
const api = axios.create({
  baseURL,
  withCredentials: true, // if using cookies
});

const genericService = {
  get: async (url, config = {}) => {
    const res = await api.get(url, {
      headers: {
        ...getAuthHeader(),
        ...config.headers,
      },
      ...config,
    });
    return res.data;
  },

  post: async (url, data = {}, config = {}) => {
    const res = await api.post(url, data, {
      headers: {
        ...getAuthHeader(),
        ...config.headers,
      },
      ...config,
    });
    return res.data;
  },

  put: async (url, data = {}, config = {}) => {
    const res = await api.put(url, data, {
      headers: {
        ...getAuthHeader(),
        ...config.headers,
      },
      ...config,
    });
    return res.data;
  },

  del: async (url, config = {}) => {
    const res = await api.delete(url, {
      headers: {
        ...getAuthHeader(),
        ...config.headers,
      },
      ...config,
    });
    return res.data;
  },

  formDataPost: async (url, data = {}, config = {}) => {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    const res = await api.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...getAuthHeader(),
        ...config.headers,
      },
      ...config,
    });
    return res.data;
  },
};

export default genericService;
