import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import Sound                from 'react-sound';
import * as TracksActions   from '../../actions/TracksActions';

import logo from '../../logo.svg';
import '../../App.css';

class TracksPage extends Component {
    static propTypes = {
        fetchTracks : PropTypes.func,
        tracks      : PropTypes.array
    }

    componentWillMount() {
        const { fetchTracks } = this.props;

        fetchTracks();
    }

    render() {
        console.log('tracks', this.props.tracks);

        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Tracks Page</h2>
                </div>
                <p className='App-intro'>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Sound
                    url='https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig=134401935fac698dd4b11e32507cd195&id=15821142&stream=1&ts=1496491200.0&token=1496491260_855789f706a9dfdedb3d8157a33f63b7c12c21c4'
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300}
                    onLoading={(a) => console.log('aaaaa', a)}
                    onPlaying={(a, b, c) => console.log('playing', a, b, c)}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tracks : state.tracks.tracks
    };
}

export default connect(mapStateToProps, { ...TracksActions })(TracksPage);
