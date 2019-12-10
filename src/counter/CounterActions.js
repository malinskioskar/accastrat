/* eslint-disable */
import {
    RESET,
    SET_VISUAL_STATE,
    INCREMENT_VALUE,
    DECREMENT_VALUE,
} from './CounterActionTypes';

export const reset = () => ({
    type: RESET,
});

export const setVisualState = (visualState) => ({
    type: SET_VISUAL_STATE,
    visualState,
});

export const increment = () => ({
    type: INCREMENT_VALUE,
});

export const decrement = () => ({
    type: DECREMENT_VALUE,
});
