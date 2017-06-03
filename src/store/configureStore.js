import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware                  from 'redux-thunk';
import { composeWithDevTools }          from 'redux-devtools-extension';

import reducers from '../reducers';

const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware))(createStore);

/* eslint-disable  */
export default function configureStore() {
    const store = createStoreWithMiddleware(reducers);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
