//Sample code
//Array-based approach

import { EDIT_STREAM } from "./types";

const streamReducer = (state = [], action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return state.map(stream => (
               stream.id === action.payload.id ? action.payload : stream
            ));
        default:
            return state;
    }
};

//Object-based approach
const objStreamReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};