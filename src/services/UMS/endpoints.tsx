export const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

// AUTH CONTROLLER
export const AUTH_LOGIN_POSTURL = `${API_BASE_URL}/Auth/login`;
export const Auth_Register_PostUrl = `${API_BASE_URL}/Auth/register`;

// USER CONTROLLER
export const User_GetUserByToken_GetUrl = `${API_BASE_URL}/User/getUserByToken`;
