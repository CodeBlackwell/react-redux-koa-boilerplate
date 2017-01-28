import axios from 'axios';
import { FETCH_PROFILE } from '../constants/homepage_constants';

export function fetchProfile () {
    const URL = `/data`;
    const request = axios.get(URL);

    return { type: FETCH_PROFILE, payload: request }

}
