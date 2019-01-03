import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './home-header.scss';

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: false, menuActive: false };
    }

    componentDidMount() {
        this.getAndSetLogedInStatus();
    }

    getAndSetLogedInStatus() {
        let isLoggedIn = localStorage.getItem('token') ? true : false;
        this.setState({
            loggedIn: isLoggedIn
        }, () => this.props.onLoginEvent(isLoggedIn));
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
        const { loggedIn, menuActive } = this.state;
        return (
            <Aux>
                <div className="app-home-header">
                    <div className="logo">
                        <img alt="no data found" src={require('../../../assets/images/logo_white.png')}></img>
                    </div>
                    <div className="options" onClick={this.menuToggle.bind(this)}>
                        <div className={menuActive ? "menu-icon active" : "menu-icon"} >
                            <p className="first"></p>
                            <p className="second"></p>
                            <p className="third"></p>
                        </div>
                        <ul className={menuActive ? 'active' : null}>
                            <li><span>ACCOMMODATIONS</span></li>
                            <li><span>ACTIVITIES</span></li>
                            {!loggedIn ? (<Aux>
                                <li><span>ABOUT</span></li>
                                <li><span>CONTACT</span></li>
                                <li onClick={this.login.bind(this)}><button>Login</button></li>
                            </Aux>)
                                : (<Aux>
                                    <li><span>HELP</span></li>
                                    <li className="favourite"><span>FAVOURITES</span>
                                        <div className="indicator">1</div>
                                    </li>
                                    <li>
                                        <div className="profileInfo" onClick={this.logout.bind(this)}>
                                            <p>Welcome back, <strong>Amanda</strong></p>
                                            <div className="profile-logo">A</div>
                                        </div>
                                    </li>
                                </Aux>)}
                        </ul>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default HomeHeader;