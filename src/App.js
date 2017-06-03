import React, { Component } from 'react';
// import { Router, Route } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TracksPage   from './components/pages/TracksPage.js';
import MainPage     from './components/pages/MainPage.js';

import logo from './logo.svg';
import './App.css';

// const customHistory = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Chat</Link></li>
                        <li><Link to='/tracks'>Tracks</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>

                    <hr />

                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/tracks' component={TracksPage} />
                    <Route exact path='/profile' component={TracksPage} />
                </div>
            </Router>
        );
    }
}

export default App;
