import {
    FETCH_MOVIE,
    FETCH_MOVIES,
    FETCH_DISCOVER_MOVIES,
} from '../actions/types';

const initialState = {
    page: 1,
};

const getMovies = (action, state) => {
    const { results, page } = action.payload;
    const oldResults = page !== 1 ? state.results : [];
    const updatedResults = [
        ...oldResults,
        ...results
    ];
    const uniqResults = Array.from(new Set(updatedResults.map(JSON.stringify))).map(JSON.parse);
    return {...state, results: uniqResults, page};
};

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_MOVIES:
            return getMovies(action, state);
        case FETCH_DISCOVER_MOVIES:
            return getMovies(action, state);
        default:
            return state;
    }
}