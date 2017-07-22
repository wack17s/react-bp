import Base from './Base';

class Tracks extends Base {
    list() {
        // return this.apiClient.get('tracks');
        return [
            {
                id     : 1,
                url    : 'http://cdn.anything2mp3.com/system/files/mp3/Pharrell%20Williams%20-%20Happy%20%28Official%20Music%20Video%29_y6Sxv-sUYtM_youtube.mp3',
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
