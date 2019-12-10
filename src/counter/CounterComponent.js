/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AbstractComponent from '../core/AbstractComponent';
import CounterReducer from './CounterReducer';
import * as CounterActions from './CounterActions';
import store from '../core/Core';

class CounterComponent extends AbstractComponent {
    constructor(props) {
        super(props);

        this.setup({
            reducer: CounterReducer.createReducer(),
        });
    }

    // shouldComponentUpdate() {
    //     // no op
    // }

    componentDidMount() {
        // no op
    }

    componentWillUnmount() {
        // no op
    }

    reset = () => {
        store.dispatch(CounterActions.reset());
    }

    setVisualState = () => {
        store.dispatch(CounterActions.setVisualState());
    }

    increment = () => {
        store.dispatch(CounterActions.increment());
    }

    decrement = () => {
        store.dispatch(CounterActions.decrement());
    }

    render() {
        const { count } = this.props;

        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <a class="button" onClick={this.decrement}>-</a>
                    <span>{count}</span>
                    <a class="button" onClick={this.increment}>+</a>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps state: ', state);

    return {
        count: state.counter ? state.counter.get('count') : 0,
    };
};

CounterComponent.propTypes = {
    count: PropTypes.number,
};

CounterComponent.defaultProps = {
    count: PropTypes.function,
};

export default connect(
    mapStateToProps,
)(CounterComponent);
