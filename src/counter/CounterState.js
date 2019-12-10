import { Map } from 'immutable';

export const STATE_SHOW_SOMETHING = 'counter: state show something';

const initialState = Map({
    count: 0,
    visualState: '',
});

export default initialState;
