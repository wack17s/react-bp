import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TracksPage   from './components/pages/TracksPage.js';
import MainPage     from './components/pages/MainPage.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Main</Link></li>
                        <li><Link to='/tracks'>Tracks</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>

                    <hr />

                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/tracks' component={TracksPage} />
                    <Route exact path='/' component={TracksPage} />
                </div>
            </Router>
        );
    }
}

export default App;
