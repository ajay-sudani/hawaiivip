import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './home-header.scss';

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
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
        const loggedIn = this.state.loggedIn;
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
                            {!loggedIn ? (<Aux>
                                <li>ABOUT</li>
                                <li>CONTACT</li>
                                <li onClick={this.login.bind(this)}><button>Login</button></li>
                            </Aux>)
                                : (<Aux>
                                    <li>HELP</li>
                                    <li className="favourite">FAVOURITES
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