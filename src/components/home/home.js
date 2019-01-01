import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './home.scss';
import Footer from '../footer/footer';
import HomeHeader from './home-header/home-header';
import HomeSearch from './home-search/home-search';
import AdvancedSearch from './advanced-search/advanced-search';
import AccommodationContainer from '../../container/home/accommodation/accommodation';
import ActivitiesContainer from '../../container/home/activities/activities';
import VipDifferenceContainer from '../../container/home/vip-difference/vip-difference';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: 0, windowHeight: 0, accommodation: [], activities: [], vipDifference: [], loggedIn: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.setAccommodation();
        this.setActivities();
        this.setVIPDifference();
    }

    setAccommodation() {
        this.setState({
            accommodation: [{
                'url': require("../../assets/images/accommodation_3.png"),
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': require("../../assets/images/accommodation_1.png"),
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': require("../../assets/images/accommodation_1.png"),
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }]
        });
    }

    setActivities() {
        this.setState({
            activities: [{
                'url': require("../../assets/images/activity_1.png"),
                'description': 'Ultimate Doors Off Heli ~ Hana Adventure',
                'info': 'Fly through the sky above the beautiful island of Maui & enjoy breathtaking scenery on your way to Hana. Once you land get picked up in a private SUV totake you to world renown Hamoa Beach for some sun and a picnic. Enjoy one of the best places on Maui without having to drive or worry.'
            }, {
                'url': require("../../assets/images/activity_2.png"),
                'description': 'Private Sail to Lanai ~ Snorkel - Scuba - Golf',
                'info': 'Take a sail boat to the private island of Lanai to enjoy the best the island has to offer. Snorkel with the aquatic life, Off-Road & play 18 holes on one of the planets most renown golf courses. Finish the day off enjoying your favorite cocktail with gourmet foods as you sail home with the sunset.'
            }, {
                'url': require("../../assets/images/activity_3.png"),
                'description': 'Waikiki ~ First Class',
                'info': 'Indulge in the Ultimate Waikiki Experience. Choose to surf with the beach boys, visit historic pearl harbor or check out the Hawaiian cultural highlights. Depending on your style we can help you see it all. Waikiki offers the best nightlife in the state. VIP tables & service available at the hottest clubs upon your request.'
            }]
        });
    }

    setVIPDifference() {
        this.setState({
            vipDifference: [{
                'url': require("../../assets/images/vip_1.png"),
                'description': 'FINE ART PRINTS'
            }, {
                'url': require("../../assets/images/vip_2.png"),
                'description': 'HAWAII HELICOPTER TOURS'
            }, {
                'url': require("../../assets/images/vip_3.png"),
                'description': 'MOLOKINI SNORKEL TRIPS'
            }, {
                'url': require("../../assets/images/vip_4.png"),
                'description': 'LAVA FLOW EXPEDITIONS'
            }]
        });
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
        const { windowWidth, windowHeight, accommodation, activities, vipDifference, loggedIn } = this.state;

        return (
            <Aux>
                <div className="app-home">
                    <section className="top">
                        <div className="container">
                            <HomeHeader onLoginEvent={this.onLoginEvent.bind(this)}></HomeHeader>
                            <div className="bg-area">
                                <img alt="no data found"  src={require('../../assets/images/background_1.png')}></img>
                            </div>
                            <HomeSearch></HomeSearch>
                        </div>
                    </section>
                    {loggedIn ? (<section className="advanced-search">
                        <AdvancedSearch></AdvancedSearch>
                    </section>) : null}
                    <section className="accommodation">
                        <AccommodationContainer loggedIn={loggedIn} accommodation={accommodation}></AccommodationContainer>
                    </section>
                    <section className="sunshine">
                        <img alt="no data found"  src={require('../../assets/images/sunshine_makena_fairway_landing.png')}></img>
                    </section>
                    <section className="activities">
                        <ActivitiesContainer activities={activities}></ActivitiesContainer>
                    </section>
                    <section className="bg-cover">
                        <img  alt="no data found" src={require('../../assets/images/bg_cover_1.png')}></img>
                    </section>
                    <section className="vip-difference">
                        <VipDifferenceContainer vipDifference={vipDifference}></VipDifferenceContainer>
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
            </Aux >
        )
    };
}

export default Home;