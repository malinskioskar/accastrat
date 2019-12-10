/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import AbstractComponent from '../core/AbstractComponent';
import HorizontalMenuReducer from './HorizontalMenuReducer';

class HorizontalMenuComponent extends AbstractComponent {
    constructor(props) {
        super(props);

        this.setup({
            reducer: HorizontalMenuReducer.createReducer(),
        });
        this.pagesList = ['page0', 'page1', 'page2'];
    }

    openPage = (event) => {
        switch (event.currentTarget.id) {
            case 'page0': {
                console.log('openPage0');
                break;
            }
            case 'page1': {
                console.log('openPage1');
                break;
            }
            case 'page2': {
                console.log('openPage2');
                break;
            }
            default: {
                console.log('openPage:' + event.currentTarget.id);
            }
        }
        console.log('AAAopenPage: ' + event.currentTarget.id);
        
        for (let j = 0; j < this.pagesList.length; j++) {
            document.getElementById(this.pagesList[j]).className = 'button';
        }
        document.getElementById(event.currentTarget.id).className = 'button is-primary';
    }

    render() {
        const { currentTab } = this.props;
        return (
            <div className="tabs">
                    <ul>
                        <li id="tablinks" className="tab is-active">
                            <button id="page0" type="button" className="button is-primary" onClick={this.openPage}>
                                <span>Home</span>
                            </button>
                        </li>
                        <li id="tablinks" className="tab">
                            <button id="page1" type="button" className="button" onClick={this.openPage}>
                                <span>Page1</span>
                            </button>
                        </li>
                        <li id="tablinks" className="tab">
                            <button id="page2" type="button" className="button" onClick={this.openPage}>
                                <span>Page2</span>
                            </button>
                        </li>
                    </ul>
                    <br/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log('mapStateToProps state: ', state);

    return {
        currentTab: state.horizontalMenu ? state.horizontalMenu.get('currentTab') : 0,
    };
};

export default connect(
    mapStateToProps,
)(HorizontalMenuComponent);
