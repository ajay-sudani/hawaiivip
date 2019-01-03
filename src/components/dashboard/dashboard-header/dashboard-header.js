import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './dashboard-header.scss';

class DashboardHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { menuActive: false, loggedIn: false };
    }

    componentDidMount() {
        let loggedIn = localStorage.getItem('token') ? true : false;
        this.setState({
            loggedIn: loggedIn
        });
    }

    menuToggle() {
        let menuActive = this.state.menuActive;
        this.setState({
            menuActive: !menuActive
        });
    }

    login() {
        localStorage.setItem('token', new Date().valueOf().toString());
        this.setState({
            loggedIn: true
        }, () => this.props.onLoginEvent(true));
    }

    logout() {
        localStorage.removeItem('token');
        this.setState({
            loggedIn: false
        }, () => this.props.onLoginEvent(false));
    }

    render() {

        const { menuActive, loggedIn } = this.state;

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
                                {
                                    loggedIn ? (
                                        <Aux>
                                            <li>HELP</li>
                                            <li className="favourite">
                                                <span>FAVOURITES</span>
                                                <p>2</p>
                                            </li>
                                            <li className="profileInfo" onClick={this.logout.bind(this)}>
                                                <div>
                                                    <p>Welcome back, <strong>Amanda</strong></p>
                                                    <div className="profile-logo">A</div>
                                                </div>
                                            </li>
                                        </Aux>
                                    ) :
                                        (
                                            <Aux>
                                                <li>ABOUT</li>
                                                <li>CONTACT</li>
                                                <li className="login-content">
                                                    <button onClick={this.login.bind(this)}>LOGIN</button>
                                                </li>
                                            </Aux>
                                        )
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default DashboardHeader;