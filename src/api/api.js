import axios from "axios";

export const BASE_URL = "http://localhost:5000";

// Intilializing Axios with Base Url
export default axios.create({
  baseURL: BASE_URL,
});

// User Routes
export const registerUserRoute = "/api/user/register";
export const logInRoute = "/api/user/login";
export const getUserRoute = "api/user/getUser";
export const addContactRoute = "api/user/addContact";
export const getContactsRoute = "/api/user/getContacts";

// Chat Route
export const messagesRoute = "/api/chats";

// Auth Route
export const authRoute = "/api/auth";
