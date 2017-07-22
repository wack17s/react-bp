import Base from './Base';

class Tracks extends Base {
    list() {
        // return this.apiClient.get('tracks');
        return [
            {
                id     : 1,
                url    : 'http://cdn.anything2mp3.com/system/files/mp3/The%20Black%20Keys-Busted_FVnBU3tIci8_youtube.mp3',
                title  : 'Busted',
                artist : 'Black Keys',
                album  : 'The Big Come Up',
                year   : 2002
            },
            {
                id     : 2,
                url    : 'http://cdn.anything2mp3.com/system/files/mp3/THE%20BLACK%20KEYS%20-%20I%27ll%20be%20your%20man%20_%20LYRICS_wx1IOZNHHUc_youtube.mp3',
                title  : 'I\'ll be your man',
                artist : 'Black Keys',
                album  : 'The Big Come Up',
                year   : 2002
            }
        ];
    }
}

export default Tracks;
