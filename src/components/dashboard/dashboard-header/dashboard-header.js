import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './dashboard-header.scss';

class DashboardHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { menuActive: false };
    }

    menuToggle() {
        let menuActive = this.state.menuActive;
        this.setState({
            menuActive: !menuActive
        });
    }

    render() {

        const { menuActive } = this.state;

        return (
            <Aux>
                <div className="dashboard-header">
                    <div className="container">
                        <div className="logo">
                            <img alt="no data found" src={require('../../../assets/images/logo_white.png')}></img>
                        </div>
                        <div className="options">
                            <div className={menuActive ? "menu-icon active" : "menu-icon"} onClick={this.menuToggle.bind(this)}>
                                <p className="first"></p>
                                <p className="second"></p>
                                <p className="third"></p>
                            </div>
                            <ul className={menuActive ? 'active' : null}>
                                <li>HELP</li>
                                <li className="favourite">
                                    <span>FAVOURITES</span>
                                    <p>2</p>
                                </li>
                                <li className="profileInfo">
                                    <div>
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