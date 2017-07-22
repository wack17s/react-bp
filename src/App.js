import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TracksPage from './containers/TracksPage.js';
import MainPage   from './components/pages/MainPage.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Main</Link></li>
                        <li><Link to='/tracks'>Tracks</Link></li>
                    </ul>

                    <hr />

                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/tracks' component={TracksPage} />
                </div>
            </Router>
        );
    }
}
