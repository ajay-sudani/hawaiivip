import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './dashboard-search.scss';

class DashboardSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { toggleGuest: false, guestNumber: 0 };
    }

    componentDidMount() {
    }

    onGuestClick() {
        const guest = this.state.toggleGuest;
        this.setState({
            toggleGuest: !guest
        }, () => {
            this.props.onGuestToggle(this.state.toggleGuest);
        });
    }

    onGuestNumberClick(event, prm) {
        event.stopPropagation();
        const guestNumber = this.state.guestNumber;
        if (prm === 'plus') {
            this.setState({
                guestNumber: guestNumber + 1
            });
        } else {
            if (guestNumber > 0) {
                this.setState({
                    guestNumber: guestNumber - 1
                });
            }
        }
    }

    clearGuest() {
        this.setState({
            guestNumber: 0
        });
    }

    applyGuest() {

    }

    render() {

        const toggleGuest = this.state.toggleGuest;
        const guestNumber = this.state.guestNumber;

        return (
            <Aux>
                <div className="app-dashboard-search">
                    <div className="container">
                        <div className="content">
                            <div className="left">
                                <div className="column areas">
                                    <select>
                                        <option value="1">Area 1</option>
                                        <option value="2">Area 2</option>
                                        <option value="3">Area 3</option>
                                    </select>
                                </div>
                                <div className="column date">
                                    <input type="date"></input>
                                </div>
                                <div className={toggleGuest ? "column guest active" : "column guest"} onClick={this.onGuestClick.bind(this)}>
                                    <p>{guestNumber} Guests</p>
                                    <div className="guest-content">
                                        <div className="top">
                                            <span>Guests</span>
                                            <div className="minus" onClick={(event) => { this.onGuestNumberClick(event, 'minus') }}>-</div>
                                            <div className="number">{guestNumber}</div>
                                            <div className="plus" onClick={(event) => { this.onGuestNumberClick(event, 'plus') }}>+</div>
                                        </div>
                                        <div className="bottom">
                                            <span className="clear" onClick={this.clearGuest.bind(this)}>Clear</span>
                                            <span className="apply" onClick={this.applyGuest.bind(this)}>Apply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column price">
                                    <select>
                                        <option value="1">Price 1</option>
                                        <option value="2">Price 2</option>
                                        <option value="3">Price 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="right">
                                <p className="accommodations">Accommodations</p>
                                <div className="switch">
                                    <div className="indicator">
                                        <div className="arrow">
                                            <img alt="no data found" src={require('../../../assets/images/left_arrow_indicator.png')}></img>
                                        </div>
                                    </div>
                                </div>
                                <p className="activities">Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default DashboardSearch;