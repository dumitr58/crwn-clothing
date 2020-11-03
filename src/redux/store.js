// Middleware are funcitons that receive actions in
// that reads them and pass them to the root reducer
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// ...middleware will spread each item in the array as individual
// arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};
