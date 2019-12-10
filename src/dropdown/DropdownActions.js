import {
    RESET,
    TOGGLE,
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESSFUL,
    FETCH_PRODUCT_FAILED,
} from './DropdownActionTypes';

export const reset = () => ({
    type: RESET,
});

export const toggle = () => ({
    type: TOGGLE,
});

export const fetchProduct = () => ({
    type: FETCH_PRODUCT,
});

export const fetchProductSuccessful = (payload) => ({
    type: FETCH_PRODUCT_SUCCESSFUL,
    payload,
});

export const fetchProductFailed = (payload) => ({
    type: FETCH_PRODUCT_FAILED,
    payload,
});
