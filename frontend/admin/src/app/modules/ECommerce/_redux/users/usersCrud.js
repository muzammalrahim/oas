import axios from "axios";
import { API_URL } from '../../../../pages/helper/api'

export const PRODUCTS_URL = API_URL + "product-user";

// CREATE =>  POST: add a new user to the server
export function createUser(user) {
  return axios.post(PRODUCTS_URL+'/', { ...user });
}

// READ
export function getAllUsers({pageNumber, filter, pageSize, sortField, sortOrder}) {
  return axios.get(PRODUCTS_URL,  {
    params: {...filter, page:pageNumber, page_size: pageSize, ordering: (sortOrder == 'asc') ? sortField : '-'+sortField}
  });
}

export function getUserById(userId) {
  return axios.get(`${PRODUCTS_URL}/${userId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findUsers(queryParams) {
  return axios.post(`${PRODUCTS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateUser(user) {
  return axios.put(`${PRODUCTS_URL}/${user.id}/`, { ...user });
}

// UPDATE Status
export function updateStatusForUsers(ids, status) {
  return axios.post(`${PRODUCTS_URL}/updateStatusForUsers`, {
    ids,
    status
  });
}

// DELETE => delete the user from the server
export function deleteUser(userId) {
  return axios.delete(`${PRODUCTS_URL}/${userId}`);
}

// DELETE Users by ids
export function deleteUsers(ids) {
  return axios.post(`${PRODUCTS_URL}/delete-all/`, { ids });
}
