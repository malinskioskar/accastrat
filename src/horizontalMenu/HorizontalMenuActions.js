/* eslint-disable */
import {
    RESET,
    SET_VISIBLE_TAB,
} from './HorizontalMenuActionTypes';

export const reset = () => ({
    type: RESET,
});

export const setVisibleTab = (currentTab) => ({
    type: SET_VISIBLE_TAB,
    currentTab,
});
