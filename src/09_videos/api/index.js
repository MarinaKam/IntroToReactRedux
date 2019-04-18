import axios from 'axios';
import { API_KEY } from '../actions/types';

const URL = 'https://api.themoviedb.org/3';

export default axios.create({
    baseURL: URL,
    params: {
        api_key: API_KEY,
        language: "en-US",
        include_adult: false
    }
});