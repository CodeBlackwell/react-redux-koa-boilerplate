import axios from 'axios';
import { FETCH_PROFILE } from '../constants/homepage_constants';


export function fetchProfile () {
    const request = axios.get('/data')

    return { type: FETCH_PROFILE, payload: request }

}
