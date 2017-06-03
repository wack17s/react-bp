import React                 from 'react';
import ReactDOM              from 'react-dom';
import { Provider }          from 'react-redux';
import { polyfill }          from 'smoothscroll-polyfill';
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore        from './store/configureStore';
import './index.css';

polyfill();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
