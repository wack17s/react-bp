import {
    SET_TRACKS
} from '../actions/TracksActions.js';

const initialState = {
    tracks: []
};

export default function bookings(state = initialState, action) {
    switch (action.type) {
        case SET_TRACKS:
            return { ...state, tracks: action.tracks };
        default:
            return state;
    }
}
