import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <Aux>
                <div className="app-footer">
                    <div className="logo">
                        <img alt="no data found" src={require('../../assets/images/logo.png')}></img>
                    </div>
                    <div className="options">
                        <ul>
                            <li>ACCOMMODATIONS</li>
                            <li>ACTIVITIES</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><img alt="no data found" src={require('../../assets/images/insta.png')}></img></li>
                            <li><img alt="no data found" src={require('../../assets/images/facebook.png')}></img></li>
                            <li><img alt="no data found" src={require('../../assets/images/twitter.png')}></img></li>
                            <li><span>(855) 429-6847</span></li>
                        </ul>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default Footer;