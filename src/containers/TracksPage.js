import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';

import logo from '../logo.svg';

import SoundPlayer from '../components/other/SoundPlayer.js';

import '../App.css';

@inject('tracksStore')
@observer
export default class TracksPage extends Component {
    static propTypes = {
        tracksStore  : PropTypes.object
    }

    state = {
        isPlaying: false,
        currentTrackId: null
    }

    componentWillMount() {
        this.props.tracksStore.fetchTracks();
    }

    handleTogglePause = () => {
        const { isPlaying } = this.state;

        this.setState({ isPlaying: !isPlaying });
    }

    handleSelectTrack = (currentTrackId) => {
        const { isPlaying } = this.state;

        if (isPlaying) this.handleTogglePause();

        this.setState({ currentTrackId });
    }

    render() {
        const { tracks } = this.props.tracksStore;
        const { isPlaying, currentTrackId } = this.state;

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
                                trackListItemSelected: track.id === currentTrackId
                            });

                            return (
                                <div
                                    className = {trackListItemClasses}
                                    onClick   = {this.handleSelectTrack.bind(this, track.id)}
                                    key       = {track.id}
                                >
                                    {track.title}
                                </div>);
                        })
                    }
                </div>
                <SoundPlayer
                    isPlaying     = {isPlaying}
                    onTogglePause = {this.handleTogglePause}
                    track         = {tracks.find(track => track.id === currentTrackId)}
                />
            </div>
        );
    }
}
