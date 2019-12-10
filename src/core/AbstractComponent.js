/* eslint-disable */
import { Component } from 'react';
import { addReducer, observeReducer } from './Reducers';
import store from './Core';

class AbstractComponent extends Component {
    constructor(props) {
        super(props);

        this.props = props;

        console.log('Constructor called');
    }

    setup(options) {
        this.options = options;
        const { reducer } = options;

        if (reducer) {
            const { name } = reducer;

            addReducer(store, reducer);
            this.listenState(name);
            const state = store.getState(name);
            this.triggerStateHasChanged(state);
        }
    }

    onChange(state) {
        this.setState(state);
        this.triggerStateHasChanged(state);
    }

    listenState(name) {
        this.stateName = name;
        this.unsubscribe = observeReducer(
            store,
            name,
            (state) => this.onChange(state),
        );
    }

    triggerStateHasChanged(state) {
        this.stateHasChanged(state);
    }

    // eslint-disable-next-line no-unused-vars
    stateHasChanged(state) {
        // no op
    }

    updateView() {
        this.render();
    }
}
export default AbstractComponent;
