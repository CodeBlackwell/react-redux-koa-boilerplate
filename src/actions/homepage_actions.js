import axios from 'axios';
import { FETCH_PROFILE } from '../constants/homepage_constants';
import { ROOT_URL } from '../constants/application_constants';


export function fetchProfile () {
    const URL = `${ROOT_URL}/data`;
    const request = axios.get(URL);

    return { type: FETCH_PROFILE, payload: request }

}
