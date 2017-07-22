import { observable } from 'mobx';

import api from '../apiSingleton.js';

export default class TracksStore {
    @observable tracks = []

    async fetchTracks() {
        try {
            this.tracks = await api.tracks.list() || [];
        } catch (err) {
            console.log('Fetch tracks error: ', err);
        }
    }
}
