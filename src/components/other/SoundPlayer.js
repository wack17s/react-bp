import React, { Component } from 'react';
import Sound                from 'react-sound';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';

export default class SoundPlayer extends Component {
    static propTypes = {
        onTogglePause : PropTypes.func,
        track         : PropTypes.object,
        isPlaying     : PropTypes.bool
    }

    render() {
        const { isPlaying, onTogglePause, track } = this.props;
        const playerButtonClasses = cx({
            'playerButton' : true,
            'playerButton-playing' : isPlaying
        });

        return (
            <div className='SoundPlayer'>
                <div className={playerButtonClasses} onClick={onTogglePause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </div>
                <div className='playingLabel'>{track && track.title}</div>
                <Sound
                    url={track && track.url}
                    playStatus={isPlaying ? Sound.status.PLAYING : false}
                    playFromPosition={0}
                    onLoading={(a) => console.log('aaaaa', a)}
                    onPlaying={(a, b, c) => console.log('playing', a, b, c)}
                />
            </div>
        );
    }
}
