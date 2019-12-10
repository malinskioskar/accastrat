/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
 BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import App from '../App';
import CounterComponent from '../counter/CounterComponent';
import DropdownComponent from '../dropdown/DropdownComponent';
import HorizontalMenuComponent from '../horizontalMenu/HorizontalMenuComponent';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {/* <a className="navbar-item" href="https://accastrategy.com"> */}
                    {/* <img src="../../images/acca_strategy_logo.png" alt="Acca Strategy" /> */}
                    {/* </a> */}

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigtionBar">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    </a>
                </div>

                <div id="navigtionBar" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">App</Link>
                        <Link className="navbar-item" to="/counter">Counter</Link>
                        <Link className="navbar-item" to="/dropdown">Dropdown</Link>
                        <Link className="navbar-item" to="/horizontalMenu">Horizontal Menu</Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/counter" component={CounterComponent} />
                <Route path="/dropdown" component={DropdownComponent} />
                <Route path="/horizontalMenu" component={HorizontalMenuComponent} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
};

export default Root;
