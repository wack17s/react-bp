import ApiClient from './ApiClient';
import TracksAPI from './Tracks';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient : api,
        sessions  : new TracksAPI({ apiClient : api })
    };
}
