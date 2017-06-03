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

                <SoundPlayer />
            </div>
        );
    }
}
