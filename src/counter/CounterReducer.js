import Reducer from '../core/Reducer';
// eslint-disable-next-line no-unused-vars
import initialState, { STATE_SHOW_SOMETHING } from './CounterState';

import {
  RESET,
  SET_VISUAL_STATE,
  INCREMENT_VALUE,
  DECREMENT_VALUE,
} from './CounterActionTypes';

// eslint-disable-next-line no-unused-vars
function reset(state) {
  return initialState;
}

function setVisualState(state, action) {
  const { visualState } = action;

  return state.set('visualState', visualState);
}

function increment(state) {
  const updatedCount = state.get('count') + 1;

  return state.set('count', updatedCount);
}

function decrement(state) {
  const updatedCount = state.get('count') - 1;

  return state.set('count', updatedCount);
}

const CounterReducer = new Reducer({
  name: 'counter',
  initialState,
  reduceFunctions: {},
});

CounterReducer.addReduceFunctions({
  [RESET]: reset,
  [SET_VISUAL_STATE]: setVisualState,
  [INCREMENT_VALUE]: increment,
  [DECREMENT_VALUE]: decrement,
});

export default CounterReducer;
