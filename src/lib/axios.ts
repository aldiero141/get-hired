import axios from "axios";
import Cookies from "js-cookie";

// Axios Instance
const api = axios.create({
  baseURL: import.meta.env.VITE_ENVIRONMENT === "development" ? "/api" : import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Axios Interceptors
api.interceptors.request.use(
  (config: any) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // Global Error Handling
    if (error.response?.status === 401) {
      console.warn("Unauthorized — redirecting to login");
      Cookies.remove("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
