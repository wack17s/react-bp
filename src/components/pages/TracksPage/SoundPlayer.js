import React, { Component } from 'react';
import Sound                from 'react-sound';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';

export default class SoundPlayer extends Component {
    static propTypes = {
        onTogglePause : PropTypes.func,
        isPlaying : PropTypes.bool
    }

    render() {
        const { isPlaying, onTogglePause } = this.props;
        const playerButtonClasses = cx({
            'playerButton' : true,
            'playerButton-playing' : isPlaying
        });

        return (
            <div className='SoundPlayer'>
                <div className={playerButtonClasses} onClick={onTogglePause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </div>
                <Sound
                    url='https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig=176920eab07717d5d5f2061d092075d8&id=15821142&stream=1&ts=1496520000.0&token=1496520060_3544ffe1c59755ba8ca3109a3a537af33caa0d4f'
                    playStatus={isPlaying ? Sound.status.PLAYING : false}
                    playFromPosition={0}
                    onLoading={(a) => console.log('aaaaa', a)}
                    onPlaying={(a, b, c) => console.log('playing', a, b, c)}
                />
            </div>
        );
    }
}
