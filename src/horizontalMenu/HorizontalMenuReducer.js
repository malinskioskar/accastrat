/* eslint-disable */
import Reducer from '../core/Reducer';
// eslint-disable-next-line no-unused-vars
import initialState, { STATE_SET_VISIBLE_TAB } from './HorizontalMenuState';

import {
  RESET,
  SET_VISIBLE_TAB,
} from './HorizontalMenuActionTypes';

// eslint-disable-next-line no-unused-vars
function reset(state) {
  return initialState;
}

function setVisibleTab(state) {
    const updatedCount = state.get('currentTab') + 1;
    if (updatedCount < 3) {
        updatedCount = 0;
    }
    return state.set('currentTab', updatedCount);
}

const HorizontalMenuReducer = new Reducer({
  name: 'horizontalMenu',
  initialState,
  reduceFunctions: {},
});

HorizontalMenuReducer.addReduceFunctions({
  [RESET]: reset,
  [SET_VISIBLE_TAB]: setVisibleTab,
});

export default HorizontalMenuReducer;
