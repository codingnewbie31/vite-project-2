import axios from "axios";

const BASE_URL = "http://localhost:3000/v1/user";
const CATEGORY_URL = "http://localhost:3000/v1/category";
const AUTH_URL = "http://localhost:3000/v1";

export const createUser = (values) => axios.post(BASE_URL, values);
export const getAllUsers = () => axios.get(BASE_URL);
export const updateUser = (id, values) => axios.put(`${BASE_URL}/${id}`, values);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/${id}`);

export const createCategory = (values) => axios.post(CATEGORY_URL, values);
export const getAllCategories = () => axios.get(CATEGORY_URL);
export const updateCategory = (id, values) => axios.put(`${CATEGORY_URL}/${id}`, values);
export const deleteCategory = (id) => axios.delete(`${CATEGORY_URL}/${id}`);

export const loginUser = (values) => axios.post(`${AUTH_URL}/login`, values);