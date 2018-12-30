import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './home-header.scss';

class HomeHeader extends Component {
    render() {
        return (
            <Aux>
                <div className="app-home-header">
                    <div className="logo">
                        <img alt="no data found" src={require('../../../assets/images/logo_white.png')}></img>
                    </div>
                    <div className="options">
                        <ul>
                            <li>ACCOMMODATIONS</li>
                            <li>ACTIVITIES</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                            <li><button>Login</button></li>
                        </ul>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default HomeHeader;