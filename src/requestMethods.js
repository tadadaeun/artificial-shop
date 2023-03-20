import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.creat({
    baseURL: BASE_URL,
});
