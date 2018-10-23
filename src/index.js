import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { setHotels } from './actions/hotels';
import hotels from './fixtures/hotels';

import './index.css';
import * as serviceWorker from './serviceWorker';


const store = getAppStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(setHotels(hotels));

    ReactDOM.render(jsx, document.getElementById('root'));
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
