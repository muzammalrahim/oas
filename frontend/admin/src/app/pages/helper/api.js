import axios from 'axios'

export const ADMIN_ROUTE ='admin'
const API_URL = process.env.REACT_APP_API_URL;
const Authorization = JSON.parse(localStorage.getItem('persist:v705-demo1-auth'))?.authToken

export const headers = {
    'Content-type' : 'application/json',
    Authorization : `Token ${Authorization?.replaceAll('"','')}`
}

export default function list(endpoint, params = {}){
    let config = {
        headers: headers,
        params : params
    }
    return axios.get(API_URL + endpoint, config).then(response=>{
     if(response.data.results !== undefined){
         response.data = {
             count : response.data.count,
             next : response.data.next,
             previous : response.data.previous
         }
     }
     return response;
    })
}

export function put(endpoint, data){
    let config = {
        headers:headers
    }
    return axios.put(API_URL + endpoint, data, config)
}

export function patch(endpoint, data){
    let config = {
        headers:headers
    }
    return axios.patch(API_URL + endpoint, data, config)
}

export function post(endpoint, data){
    let config = {
        headers:headers
    }
    return axios.post(API_URL + endpoint, data, config)
}

export function del(endpoint, data = {}){
    let config = {
        headers:headers,
        data: data
    }
    return axios.put(API_URL + endpoint, config)
}