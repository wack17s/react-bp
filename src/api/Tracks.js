import Base from './Base';

class Tracks extends Base {
    list() {
        // return this.apiClient.get('tracks');
        return [
            {
                'url'    : 'https://p4.bcbits.com/download/track/693fbdaadf6c49b76e09bdef2139753a/mp3-128/15821142?fsig =134401935fac698dd4b11e32507cd195&id =15821142&stream =1&ts =1496491200.0&token =1496491260_855789f706a9dfdedb3d8157a33f63b7c12c21c4',
                'artist' : 'Mogwai',
                'album'  : 'Every Country\'s Sun',
                'year'   : 2017
            },
            {
                'url'    : 'https://p4.bcbits.com/download/track/efb92ed8d233e75a42ee525759d2a8d5/mp3-128/759874955?fsig =0606e82472da246476ed0c1def133be3&id =759874955&stream =1&ts =1496505600.0&token =1496505660_87b7598501939b02f9e95cb5e5516c8efa82492c',
                'artist' : 'Trifonic',
                'album'  : 'Emergence',
                'year'   : 2008
            }
        ];
    }
}

export default Tracks;
