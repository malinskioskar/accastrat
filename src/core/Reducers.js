import { combineReducers } from 'redux';

/**
 * Object to hold additional reducers
 */
export const dynamicReducers = {};

/**
 * Create an observe function so we can subscribe only to state
 * changes in any particular reducer
 *
 * @returns Unsubscribe function
 */
export function observeReducer(store, reducer, onChange) {
    let currentState = store.getState();
    return store.subscribe(() => {
        const nextState = store.getState(reducer);
        if (nextState !== currentState) {
            currentState = nextState;
            onChange(currentState);
        }
    });
}

/**
 * AddReducer function allows us to dynamically add reducers at runtime
 * @param {string} dynamicReducer The name of the reducer function & state object to be used in the combined reducer
 */
export function addReducer(store, dynamicReducer) {
    const { name, reduceFunction } = dynamicReducer;

    dynamicReducers[name] = typeof dynamicReducer === 'function' ? dynamicReducer : reduceFunction;

    store.replaceReducer(
        combineReducers({
            ...dynamicReducers,
        }),
    );
}
