import axios from 'axios';
import { USER_DATA_KEY } from '@/shared/const/localstorage';

export const $api = axios.create({baseURL: process.env.API_URL || 'http://localhost:8000'});

// Add a request interceptor
$api.interceptors.request.use((config) => {
    if(config.headers) config.headers.Authorization = localStorage.getItem(USER_DATA_KEY) || '';

    return config;
});