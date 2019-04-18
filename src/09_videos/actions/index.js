import movies from "../api/index";
import {
    FETCH_DISCOVER_MOVIES,
    FETCH_MOVIES,
    FETCH_MOVIE
} from './types';



export const fetchPopularMovies = (section, page) => async dispatch => {
    const response = await movies.get(`/movie/${section}?page=${page}`);
    dispatch({type: FETCH_MOVIES, payload: response.data})
};

export const fetchDiscoverMovies = (page) => async dispatch => {
    const response = await movies.get(`/discover/movie?page=${page}&certification_country=US&certification=R&sort_by=vote_average.desc`);
    dispatch({type: FETCH_DISCOVER_MOVIES, payload: response.data});
};

export const fetchMoviePage = id => async dispatch => {
    const response = await movies.get(`/movie/${id}?append_to_response=videos,images`);
    dispatch({ type: FETCH_MOVIE, payload: response.data });
};
