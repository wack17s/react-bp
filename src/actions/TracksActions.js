import api from '../apiSingleton.js';

export const SET_TRACKS        = 'SET_TRACKS';
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';

export function fetchTracks() {
    return async dispatch => {
        const tracks = await api.tracks.list();

        await dispatch(setTrack(tracks[0]));
        await dispatch({
            type : SET_TRACKS,
            tracks
        });
    };
}


export function setTrack(currentTrack) {
    return async dispatch => {
        await dispatch({
            type : SET_CURRENT_TRACK,
            currentTrack
        });
    };
}
