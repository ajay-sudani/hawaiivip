import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './dashboard-search.scss';

class DashboardSearch extends Component {
    render() {
        return (
            <Aux>
                <div className="app-dashboard-search">
                    <div className="container">
                        <div className="content">
                            <div className="left">
                                <div className="column areas">
                                    <select>
                                        <option value="1">Area 1</option>
                                        <option value="2">Area 2</option>
                                        <option value="3">Area 3</option>
                                    </select>
                                </div>
                                <div className="column date">
                                    <input type="date"></input>
                                </div>
                                <div className="column guest">
                                    <select>
                                        <option value="1">Guest 1</option>
                                        <option value="2">Guest 2</option>
                                        <option value="3">Guest 3</option>
                                    </select>
                                </div>
                                <div className="column price">
                                    <select>
                                        <option value="1">Price 1</option>
                                        <option value="2">Price 2</option>
                                        <option value="3">Price 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="right">
                                <p className="accommodations">Accommodations</p>
                                <div className="switch">
                                    <div className="indicator">
                                        <div className="arrow">
                                            <img alt="no data found" src={require('../../../assets/images/left_arrow_indicator.png')}></img>
                                        </div>
                                    </div>
                                </div>
                                <p className="activities">Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default DashboardSearch;