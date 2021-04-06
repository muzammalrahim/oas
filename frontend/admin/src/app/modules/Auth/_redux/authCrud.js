import axios from "axios";

import { API_URL } from '../../../pages/helper/api'
export const LOGIN_URL = API_URL + "accounts/login/";
export const REGISTER_URL = API_URL + "user/";
export const REQUEST_PASSWORD_URL = API_URL + "accounts/reset-password/";

export const ME_URL = API_URL + "accounts/profile";

export function login(login, password) {
  return axios.post(LOGIN_URL, { login, password });
}

export function register(email, first_name, last_name, password) {
  return axios.post(REGISTER_URL, { email, first_name, last_name, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
