import axios from "axios";

export const BASE_URL = "http://localhost:5000";

// Initializing Axios with Base Url
export default axios.create({
  baseURL: BASE_URL,
});

// User Routes
export const registerUserRoute = "/api/user/register";
export const logInRoute = "/api/user/login";
export const getUserRoute = "api/user/getUser";
export const addContactRoute = "api/user/addContact";
export const getContactsRoute = "/api/user/getContacts";
export const setAvatarRoute = "/api/user/setAvatar";

// SearchUserRoute
export const searchUserRoute = "/api/searchUser";

// Chat Route
export const messagesRoute = "/api/chats";
export const addImageMessageRoute = "/api/chats/addImageMessage";

// Auth Route
export const decodeTokenRoute = "/api/decodeToken";
