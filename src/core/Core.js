
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import DropdownSaga from '../dropdown/DropdownSaga';

const sagaMiddleware = createSagaMiddleware();

const preloadedState = Map(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

// eslint-disable-next-line no-unused-vars
const reducer = (state = preloadedState, action) => state;

// Setup combined reducers
const rootReducer = combineReducers({
    reducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(DropdownSaga);

export default store;
