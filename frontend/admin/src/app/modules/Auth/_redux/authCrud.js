import axios from "axios";

export const LOGIN_URL = process.env.REACT_APP_API_URL + "accounts/login/";
export const REGISTER_URL = process.env.REACT_APP_API_URL + "accounts/register/";
export const REQUEST_PASSWORD_URL = process.env.REACT_APP_API_URL + "accounts/reset-password/";

export const ME_URL = process.env.REACT_APP_API_URL + "accounts/profile";

export function login(login, password) {
  return axios.post(LOGIN_URL, { login, password });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
