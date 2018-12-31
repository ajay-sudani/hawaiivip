import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './dashboard.scss';
import Footer from '../footer/footer';
import DashboardHeader from './dashboard-header/dashboard-header';
import DashboardSearch from './dashboard-search/dashboard-search';
import AccommodationContainer from '../../container/dashboard/accommodation/accommodation';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { accommodation: [] };
    }

    componentDidMount() {
        this.setAccommodation();
    }

    setAccommodation() {
        this.setState({
            accommodation: [{
                'url': [require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png"),
                require("../../assets/images/dashboard/accommodation_1.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png"),
                require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_6.png"),
                require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_3.png"),
                require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_4.png"),
                require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png"),
                require("../../assets/images/dashboard/accommodation_1.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_5.png"),
                require("../../assets/images/dashboard/accommodation_6.png"),
                require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }, {
                'url': [require("../../assets/images/dashboard/accommodation_6.png"),
                require("../../assets/images/dashboard/accommodation_1.png"),
                require("../../assets/images/dashboard/accommodation_2.png"),
                require("../../assets/images/dashboard/accommodation_3.png")],
                'description': 'coral gardens estate',
                'badrooms': 4,
                'max_guests': 8,
                'minimum_nights': 7,
                'price': 750
            }]
        });
    }

    render() {

        const { accommodation } = this.state;

        return (
            <Aux>
                <div className="app-dashboard">
                    <section>
                        <DashboardHeader></DashboardHeader>
                    </section>
                    <section>
                        <DashboardSearch></DashboardSearch>
                    </section>
                    <section>
                        <div className="bg-area">
                            <img alt="no data found" src={require('../../assets/images/napali_coast_2.png')}></img>
                        </div>
                    </section>
                    <section>
                        <div className="list-container">
                            <AccommodationContainer accommodation={accommodation}></AccommodationContainer>
                        </div>
                    </section>
                    <section>
                        <Footer></Footer>
                    </section>
                </div>
            </Aux>
        )
    };
}

export default Dashboard;