import Reducer from '../core/Reducer';
import initialState from './DropdownState';
import dropdownSaga from './DropdownSaga';

import {
    TOGGLE, RESET, FETCH_PRODUCT, FETCH_PRODUCT_SUCCESSFUL, FETCH_PRODUCT_FAILED,
} from './DropdownActionTypes';

function reset() {
    return initialState;
}

function toggle(state) {
    return state.set('isActive', !state.get('isActive'));
}

// eslint-disable-next-line no-unused-vars
function fetchProduct(state) {
    const nextProductGenerator = dropdownSaga();

    nextProductGenerator.next();

    return state;
}

function fetchProductSuccessful(state, payload) {
    const { product } = payload;

    return state.set('products', [product, ...state.get('products')]);
}

function fetchProductFailed(state, payload) {
    const { message } = payload;

    return state.set('message', message);
}

const DropdownReducer = new Reducer({
    name: 'dropdown',
    initialState,
    reduceFunctions: {},
});

DropdownReducer.addReduceFunctions({
    [RESET]: reset,
    [TOGGLE]: toggle,
    [FETCH_PRODUCT]: fetchProduct,
    [FETCH_PRODUCT_SUCCESSFUL]: fetchProductSuccessful,
    [FETCH_PRODUCT_FAILED]: fetchProductFailed,
});

export default DropdownReducer;
