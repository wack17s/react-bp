import api from '../apiSingleton.js';

export const SET_TRACKS = 'SET_TRACKS';

export function fetchBookings() {
    return async dispatch => {
        const tracks = await api.tracks.list();

        await dispatch({
            type: SET_TRACKS,
            tracks
        });
    };
}
