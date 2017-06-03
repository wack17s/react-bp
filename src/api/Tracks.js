import Base from './Base';

class Tracks extends Base {
    list() {
        // return this.apiClient.get('tracks');
        return [
            {
                id     : 1,
                url    : 'https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig=176920eab07717d5d5f2061d092075d8&id=15821142&stream=1&ts=1496520000.0&token=1496520060_3544ffe1c59755ba8ca3109a3a537af33caa0d4f',
                title  : 'Coolverine',
                artist : 'Mogwai',
                album  : 'Every Country\'s Sun',
                year   : 2017
            },
            {
                id     : 2,
                url    : 'https://p4.bcbits.com/download/track/efb92ed8d233e75a42ee525759d2a8d5/mp3-128/759874955?fsig=0606e82472da246476ed0c1def133be3&id=759874955&stream=1&ts=1496505600.0&token=1496505660_87b7598501939b02f9e95cb5e5516c8efa82492c',
                title  : 'Parks On Fire',
                artist : 'Trifonic',
                album  : 'Emergence',
                year   : 2008
            }
        ];
    }
}

export default Tracks;
