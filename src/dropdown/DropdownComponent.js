import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from '../core/AbstractComponent';
import DropdownReducer from './DropdownReducer';
import * as DropdownActions from './DropdownActions';
import store from '../core/Core';

class DropdownComponent extends AbstractComponent {
    constructor(props) {
        super(props);

        this.setup({
            reducer: DropdownReducer.createReducer(),
        });
    }

    toggle = () => {
        store.dispatch(DropdownActions.toggle());
    }

    fetchProduct = () => {
        store.dispatch(DropdownActions.fetchProduct());
    }

    _getTrigger() {
        return (
            <div>
                <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.toggle}>
                    <span className="is-family-sans-serif">Toggle Dropdown</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </button>
                <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.fetchProduct}>
                    <span>Fetch Product</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                </button>
            </div>
        );
    }

    _getProducts(products) {
        console.log('_getProducts products: ', products);

        return products.map((product, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="dropdown-item">
                {product}
            </div>
        ));
    }

    render() {
        console.log('render');
        const { isActive, products } = this.props;

        console.log('isActive: ', isActive);
        console.log('products: ', products);

        if (!isActive) {
            return (
                <div className="dropdown-trigger">
                    {this._getTrigger()}
                </div>
            );
        }


        return (
            <div className="dropdown is-active">
                <div className="dropdown-trigger">
                    {this._getTrigger()}
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {this._getProducts(products)}
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log('mapStateToProps state: ', state);

    return {
        isActive: state.dropdown ? state.dropdown.get('isActive') : false,
        products: state.dropdown ? state.dropdown.get('products') : false,
    };
};

export default connect(
    mapStateToProps,
)(DropdownComponent);
