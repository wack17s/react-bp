import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';

import logo from '../../logo.svg';

import SoundPlayer from './TracksPage/SoundPlayer';

import '../../App.css';

export default class TracksPage extends Component {
    static propTypes = {
        fetchTracks  : PropTypes.func,
        setTrack     : PropTypes.func,
        currentTrack : PropTypes.object,
        tracks       : PropTypes.array
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

    handleSelectTrack = (currentTrack) => {
        const { isPlaying } = this.state;
        const { setTrack } = this.props;

        if (isPlaying) this.handleTogglePause();
        setTrack(currentTrack);
    }

    render() {
        const { tracks, currentTrack } = this.props;
        const { isPlaying } = this.state;

        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Tracks Page</h2>
                </div>
                <div className='trackList'>
                    <div className='trackListTitle'> Track list: </div>
                    {
                        tracks.map(track => {
                            const trackListItemClasses = cx({
                                trackListItem: true,
                                trackListItemSelected: track.id === currentTrack.id
                            });

                            return (
                                <div
                                    className={trackListItemClasses}
                                    onClick={this.handleSelectTrack.bind(this, track)}
                                    key={track.id}
                                >
                                    {track.title}
                                </div>);
                        })
                    }
                </div>
                <SoundPlayer
                    isPlaying = {isPlaying}
                    onTogglePause = {this.handleTogglePause}
                    track = {currentTrack}
                />
            </div>
        );
    }
}
