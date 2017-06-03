import React, { Component } from 'react';
import Sound                from 'react-sound';

export default class SoundPlayer extends Component {
    render() {
        return (
            <Sound
                url='https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig=134401935fac698dd4b11e32507cd195&id=15821142&stream=1&ts=1496491200.0&token=1496491260_855789f706a9dfdedb3d8157a33f63b7c12c21c4'
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={(a) => console.log('aaaaa', a)}
                onPlaying={(a, b, c) => console.log('playing', a, b, c)}
            />
        );
    }
}
