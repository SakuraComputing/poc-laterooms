import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import hotelsReducer from '../reducers/hotels';
import filterReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            hotels: hotelsReducer,
            filters: filterReducer 
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}



