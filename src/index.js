import React from 'react';
import ReactDOM from 'react-dom';
// this is for our router
import { BrowserRouter } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
