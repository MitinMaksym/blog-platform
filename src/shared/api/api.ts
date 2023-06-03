import axios from 'axios';
import { USER_DATA_KEY } from 'shared/const/localstorage';

export const $api = axios.create({baseURL: __API_URL__, headers: {
    authorization: localStorage.getItem(USER_DATA_KEY)
}});