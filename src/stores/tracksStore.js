import { observable } from 'mobx';

import api from '../apiSingleton.js';

class TracksStore {
    @observable tracks = []

    async fetchTracks() {
        try {
            this.tracks = await api.tracks.list() || [];
        } catch (err) {
            console.log('Fetch tracks error: ', err);
        }
    }
}

export default new TracksStore();
