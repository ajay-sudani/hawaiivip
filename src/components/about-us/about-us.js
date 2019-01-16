import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './about-us.scss';
import Footer from '../footer/footer';
import AboutUsHeader from './about-us-header/about-us-header';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: 0, windowHeight: 0, loggedIn: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }

    onLoginEvent(data) {
        this.setState({
            loggedIn: data
        })
    }

    render() {
        const { windowHeight } = this.state;

        return (
            <Aux>
                <div className="about-us">
                    <section className="header-section">
                        <AboutUsHeader onLoginEvent={this.onLoginEvent.bind(this)}></AboutUsHeader>
                    </section>
                    <section className="background-cover">
                        <div className="image-content">
                            <img alt="no data found" src={require('../../assets/images/about_us_bg.png')}></img>
                        </div>
                    </section>
                    <section className="about-us-info">
                        <div className="about-us-label">
                            <label>ABOUT US</label>
                        </div>
                        <p className="first">
                            We are a company born and raised in the islands of Hawai'i resulting in an unparrelled connection to the isles that have earned us highly regarded respect from our clientele.
                            The HAWAI'I VIP team has been operating for over 10 years,
                            garnering us an esteemed recognition with our business partners.
                        </p>
                        <p className="second">
                            With respect comes access, which allows us to provide our clients with unprecedented
                            access to luxury estates and activities.
                        </p>
                        <p className="third">
                            Our personal concierges cater to your specific needs and will begin tailoring your trip for
                            the Ultimate Hawaiian Experience. Let us help you escape to paradise.
                        </p>
                    </section>
                    <section className="napali_coast">
                        <img height={windowHeight} alt="no data found" src={require('../../assets/images/napali_coast_1.png')}></img>
                        <div className="info">
                            <strong>
                                “ Hawai’i is not a State of Mind,
                                but a State of Grace”
                            </strong>
                            <span>— PAUL THEROUX —</span>
                        </div>
                    </section>
                    <section className="footer-section">
                        <Footer></Footer>
                    </section>
                </div>
            </Aux>
        )
    };
}

export default AboutUs;
