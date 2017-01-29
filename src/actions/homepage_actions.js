import axios from 'axios';
import { FETCH_PROFILE } from '../constants/homepage_constants';



export function fetchProfile () {
    let DEV_API_URL;
    if (process.env.NODE_ENV !== 'production') {
        DEV_API_URL = 'http://localhost:3000'
    }

    const URL = (DEV_API_URL != null) ? `${DEV_API_URL}/data` : '/data';
    const request = axios.get(URL);

    return { type: FETCH_PROFILE, payload: request }

}
