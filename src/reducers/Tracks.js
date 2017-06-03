import {
    SET_TRACKS,
    SET_CURRENT_TRACK
} from '../actions/TracksActions.js';

const initialState = {
    tracks : [],
    currentTrack: null
};

export default function bookings(state = initialState, action) {
    switch (action.type) {
        case SET_TRACKS:
            return { ...state, tracks: action.tracks };
        case SET_CURRENT_TRACK:
            console.log('SET_CURRENT_TRACK', action.currentTrack);

            return { ...state, currentTrack: action.currentTrack };
        default:
            return state;
    }
}
