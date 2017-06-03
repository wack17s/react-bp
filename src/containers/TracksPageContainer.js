import { connect }          from 'react-redux';

import TracksPage from '../components/pages/TracksPage';

import * as TracksActions   from '../actions/TracksActions';

function mapStateToProps(state) {
    return {
        tracks : state.tracks.tracks,
        currentTrack : state.tracks.currentTrack
    };
}

export default connect(mapStateToProps, { ...TracksActions })(TracksPage);
