import axios from "axios";

// ✅ Single axios instance with base URL
const api = axios.create({
  baseURL: "http://localhost:3000/v1",
});

// ✅ Interceptor — automatically attaches token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // adjust key if different
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Users
export const createUser = (values) => api.post("/user", values);
export const getAllUsers = () => api.get("/user");
export const updateUser = (id, values) => api.put(`/user/${id}`, values);
export const deleteUser = (id) => api.delete(`/user/${id}`);

// Categories
export const createCategory = (values) => api.post("/category", values);
export const getAllCategories = () => api.get("/category");
export const updateCategory = (id, values) => api.put(`/category/${id}`, values);
export const deleteCategory = (id) => api.delete(`/category/${id}`);

// Auth (no token needed for login)
export const loginUser = (values) => api.post("/login", values);