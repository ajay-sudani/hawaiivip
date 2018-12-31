import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './dashboard-header.scss';

class DashboardHeader extends Component {
    render() {
        return (
            <Aux>
                <div className="dashboard-header">
                    <div className="container">
                        <div className="logo">
                            <img alt="no data found" src={require('../../../assets/images/logo_white.png')}></img>
                        </div>
                        <div className="options">
                            <ul>
                                <li>HELP</li>
                                <li className="favourite">
                                    <span>FAVOURITES</span>
                                    <p>2</p>
                                </li>
                                <li>
                                    <div className="profileInfo">
                                        <p>Welcome back, <strong>Amanda</strong></p>
                                        <div className="profile-logo">A</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default DashboardHeader;