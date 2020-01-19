// Middleware are funcitons that receive actions in
// that reads them and pass them to the root reducer
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// ...middleware will spread each item in the array as individual
// arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
