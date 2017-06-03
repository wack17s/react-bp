import Base from './Base';

class Tracks extends Base {
    list() {
        // return this.apiClient.get('tracks');
        return [
            {
                url: 'https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig=134401935fac698dd4b11e32507cd195&id=15821142&stream=1&ts=1496491200.0&token=1496491260_855789f706a9dfdedb3d8157a33f63b7c12c21c4',
                artist: 'Mogwai',
                album: 'Every Country\'s Sun',
                year: 2017
            },
            {
                url: 'https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig=134401935fac698dd4b11e32507cd195&id=15821142&stream=1&ts=1496491200.0&token=1496491260_855789f706a9dfdedb3d8157a33f63b7c12c21c4',
                artist: 'Mogwai',
                album: 'Every Country\'s Sun',
                year: 2017
            }
        ];
    }
}

export default Tracks;
