import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'mobx-react';
import { polyfill } from 'smoothscroll-polyfill';

import registerServiceWorker from './utils/registerServiceWorker';

import stores from './stores';


import './index.css';

polyfill();

const rootEl = document.getElementById('root');

// eslint-disable-next-line
let render = () => {
    const App = require('./App').default;

    ReactDOM.render(
        <Provider {...stores}>
            <App />
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    const renderApp = render;
    // eslint-disable-next-line
    const renderError = (error) => {
        const RedBox = require('redbox-react').default;

        ReactDOM.render(
            <RedBox error={error} />,
            rootEl,
        );
    };

    render = () => {
        try {
            renderApp();
        } catch (error) {
            console.error(error);
            renderError(error);
        }
    };

    module.hot.accept('./App', () => {
        setTimeout(render);
    });
}

render();

registerServiceWorker();
