import axios from 'axios'

import { FETCH_PROFILE } from '../constants/homepage_constants';
import { ROOT_URL } from '../constants/global_constants';


export function fetchProfile () {
    const request = axios.get(`${ROOT_URL}/data/profile`);

    return { type: FETCH_PROFILE, payload: request }
}
