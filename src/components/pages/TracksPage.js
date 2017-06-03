import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import logo from '../../logo.svg';

import SoundPlayer from './TracksPage/SoundPlayer';

import '../../App.css';

export default class TracksPage extends Component {
    static propTypes = {
        fetchTracks : PropTypes.func,
        tracks      : PropTypes.array
    }

    state = {
        isPlaying: false
    }

    componentWillMount() {
        const { fetchTracks } = this.props;

        fetchTracks();
    }

    handleTogglePause = () => {
        const { isPlaying } = this.state;

        this.setState({ isPlaying: !isPlaying });
    }

    render() {
        const { tracks } = this.props;
        const { isPlaying } = this.state;

        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Tracks Page</h2>
                </div>
                {
                    tracks.map(track => {
                        return (
                            <div key={track.id}>{track.title}</div>);
                    })
                }

                <SoundPlayer
                    isPlaying = {isPlaying}
                    onTogglePause = {this.handleTogglePause}
                />
            </div>
        );
    }
}
