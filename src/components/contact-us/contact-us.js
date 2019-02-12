import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './contact-us.scss';
import Footer from '../footer/footer';
import AppHeader from '../app-header/app-header';
import { SingleDatePicker } from 'react-dates';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: 0, windowHeight: 0, loggedIn: false, startDate: null, endDate: null, startFocusedInput: false, endFocusedInput: false };
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

    onStartDateFocusChange = ({ focused }) => {
        this.setState(() => ({ startFocusedInput: focused }))
    };

    onEndDateFocusChange = ({ focused }) => {
        this.setState(() => ({ endFocusedInput: focused }))
    };

    render() {
        const { windowHeight } = this.state;

        return (
            <Aux>
                <div className="contact-us">
                    <section className="header-section">
                        <AppHeader onLoginEvent={this.onLoginEvent.bind(this)}></AppHeader>
                    </section>
                    <section className="background-cover">
                        <div className="image-content">
                            <img alt="no data found" src={require('../../assets/images/about_us_bg.png')}></img>
                        </div>
                    </section>
                    <section className="contact-us-info">
                        <div className="contact-us-label">
                            <label>CONTACT US</label>
                        </div>
                        <div className="more-text">
                            <p className="assistance-text">If you need assistance please feel free to call us toll free:</p>
                            <p className="number">(855) 429-6847</p>
                            <p className="more-information-text">To request more information please fill out the form below and we will contact you shortly! *
                                    *Due to the nature of our work we aren't always available but will have a response to you in 24 hours.</p>
                        </div>
                        <div className="form-content">
                            <div className="row name">
                                <label>NAME *</label>
                                <div className="input-content">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row email">
                                <label>EMAIL ADDRESS *</label>
                                <div className="input-content">
                                    <input type="text" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="row phone">
                                <label>PHONE *</label>
                                <div className="input-content">
                                    <input type="text" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="row selection">
                                <div className="column">
                                    <label>NUMBER OF ADULTS</label>
                                    <div className="select-area">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <div className="down-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 9" width="17" height="9">
                                                <path d="M7.76,7.74l0.71,-0.71l-6.99,-6.99l-0.71,0.71zM16.46,0.75l-0.71,-0.71l-7.99,7.99l0.71,0.71z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <label>NUMBER OF CHILDREN</label>
                                    <div className="select-area">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <div className="down-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 9" width="17" height="9">
                                                <path d="M7.76,7.74l0.71,-0.71l-6.99,-6.99l-0.71,0.71zM16.46,0.75l-0.71,-0.71l-7.99,7.99l0.71,0.71z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row check-in-out">
                                <div className="column start-date">
                                    <label>CHECK IN</label>
                                    <SingleDatePicker
                                        date={this.state.startDate}
                                        onDateChange={startDate => { this.setState({ startDate }) }}
                                        focused={this.state.startFocusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) 
                                        onFocusChange={this.onStartDateFocusChange}
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                        displayFormat="DD/MM/YYYY"
                                        placeholder="Start date"
                                        id="start_date"
                                    />
                                    <div className="date-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                            <defs>
                                                <filter id="flt1"> <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.847   0 0 0 0 0.847   0 0 0 0 0.847   0 0 0 1 0" /> </filter>
                                                <image width="550" height="550" id="date_icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODkgMzg5IiB3aWR0aD0iMzg5IiBoZWlnaHQ9IjM4OSI+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJCS5zaHAwIHsgZmlsbDogI2ZmZmZmZiB9IAoJPC9zdHlsZT4KCTxnIGlkPSJQYWdlIDEiPgoJCTxwYXRoIGlkPSJQYXRoIDEiIGNsYXNzPSJzaHAwIiBkPSJNMzg4Ljc2IDgzLjE3TDM4OC43NiAzMzcuMTZDMzg0LjY2IDM1Mi4zMSAzNzguNzUgMzY2Ljc2IDM2NS4xOSAzNzUuNjRDMzU2LjU1IDM4MS4yOSAzNDYuNCAzODQuNjIgMzM2LjkzIDM4OUw1MS44NCAzODlDMzYuNzEgMzg0Ljg3IDIyLjIzIDM3OS4wMSAxMy4zNiAzNjUuNDNDNy43MiAzNTYuNzkgNC4zNyAzNDYuNjQgMCAzMzcuMTZDMCAyNTIuNSAwIDE2Ny44NCAwIDgzLjE3QzAuNTEgODIuMTkgMS4yNSA4MS4yNyAxLjUxIDgwLjIyQzEwLjMyIDQ0LjcgNDMuMTUgMjQuNjUgODEuMDMgMzMuMTZDODEuMDMgNDcuMDkgODAgNjEuNTEgODEuMyA3NS43MkM4Mi44NSA5Mi42IDk3Ljg0IDEwNS4yNSAxMTQuODMgMTA1LjkxQzEyMi4zIDEwNi4yIDEzMC4xMiAxMDcuMzIgMTM3LjE4IDEwNS41OUMxNDUuNDggMTAzLjU2IDE1NC4wNyAxMDAuMSAxNjAuODMgOTUuMDFDMTcwLjEzIDg3Ljk5IDE3Mi4wMiA3Ni43NSAxNzEuOTcgNjUuNDJDMTcxLjkzIDU0LjM1IDE3MS45NiA0My4yOCAxNzEuOTYgMzIuMTFMMjI0LjY1IDMyLjExQzIyNC42NSA0NS4yIDIyNC40MiA1Ny44MSAyMjQuNyA3MC40MUMyMjUuMTIgODkuOTMgMjQwLjMgMTA1LjIyIDI1OS43NSAxMDUuOTZDMjY1LjIgMTA2LjE3IDI3MC42NyAxMDYuMDcgMjc2LjE0IDEwNi4wNEMzMDEuMzkgMTA1LjkyIDMxNi4wMiA5MS4xNyAzMTYuMTYgNjUuNjVDMzE2LjIyIDU0LjUzIDMxNi4xNyA0My40MSAzMTYuMTcgMzIuMDFDMzM1LjkgMzAuMzQgMzUyLjk0IDM0LjE3IDM2Ny42NyA0Ni42MUMzNzkuMTYgNTYuMyAzODQuNjQgNjkuMzEgMzg4Ljc2IDgzLjE3Wk0xOTMuOTggMzU5LjE1QzIzNi44NiAzNTkuMTUgMjc5LjczIDM1OS4yOCAzMjIuNjEgMzU5LjFDMzQ2LjA3IDM1OS4wMSAzNTguNjYgMzQ3LjMyIDM1OC44IDMyNC42M0MzNTkuMTMgMjY4LjgxIDM1OS4wMiAyMTIuOTggMzU4Ljg0IDE1Ny4xNkMzNTguNzkgMTQxLjQxIDM1MS42NiAxMzQuOCAzMzUuOTIgMTM0Ljc5QzI0MS41NCAxMzQuNzggMTQ3LjE1IDEzNC43OCA1Mi43NyAxMzQuOEMzNy4wNyAxMzQuOCAyOS45NyAxNDEuNDMgMjkuOTIgMTU3LjIzQzI5Ljc1IDIxMy4wNiAyOS44MSAyNjguODggMjkuOSAzMjQuNzFDMjkuOTIgMzM0LjQ3IDMyLjM4IDM0My40NyAzOS44NiAzNTAuNDlDNDcuNTkgMzU3Ljc0IDU3LjEgMzU5LjE1IDY3LjA4IDM1OS4xNUMxMDkuMzggMzU5LjE2IDE1MS42OCAzNTkuMTYgMTkzLjk4IDM1OS4xNVpNMTM5Ljk1IDAuMjRDMTQ5Ljk2IDQuOTYgMTUzLjc2IDEyLjgxIDE1My4zMSAyMy44M0MxNTIuNzIgMzguMTkgMTUzLjI1IDUyLjYgMTUzLjE0IDY2Ljk4QzE1My4wMyA4MC43OCAxNDYuMjkgODcuNDIgMTMyLjM5IDg3Ljg0QzEwOC43NiA4OC41NCA5Ni44OCA4OC4yMyA5OC43NSA1NS41NkM5OS4zNCA0NS4yNCA5OS4zNSAzNC44MiA5OC43IDI0LjVDOTcuOTggMTMuMTUgMTAxLjkxIDUuMDUgMTEyLjMxIDAuMjRMMTM5Ljk1IDAuMjRaTTI4My4zNiAwLjI0QzI5My43NCA0LjQxIDI5Ny45MiAxMS45IDI5Ny40MyAyMy4xOUMyOTYuNzcgMzguMTEgMjk3LjMzIDUzLjA5IDI5Ny4yNCA2OC4wNEMyOTcuMTcgODAuMDUgMjkwLjk0IDg2LjcyIDI3OS4wOSA4Ny43OEMyNzguOCA4Ny44IDI3OC41MSA4Ny44MSAyNzguMjMgODcuODFDMjU1LjY0IDg3LjkxIDI0MSA5MS4yOCAyNDMuMzUgNTUuMzlDMjQ0LjAyIDQ1LjA4IDI0NC4xMiAzNC42MyAyNDMuMjcgMjQuMzVDMjQyLjM0IDEzLjI5IDI0Ni4zMyA1LjU3IDI1NS43MiAwLjI0TDI4My4zNiAwLjI0Wk0xNzQuMjggMjI1LjkxQzE3NC4yOCAyMjkuNjIgMTY5LjI2IDIzMi43NCAxNjIuNyAyMzIuNzRMODkuMDQgMjMyLjc0QzgyLjQ3IDIzMi43NCA3Ni4zNiAyMjkuNjIgNzYuMzYgMjI1LjkxTDc2LjM2IDE4NC4yM0M3Ni4zNiAxODAuNTIgODIuNDcgMTc2LjQ5IDg5LjA0IDE3Ni40OUwxNjIuNyAxNzYuNDlDMTY5LjI2IDE3Ni40OSAxNzQuMjggMTgwLjUyIDE3NC4yOCAxODQuMjNMMTc0LjI4IDIyNS45MVpNMzEzLjg2IDIyNS45MUMzMTMuODYgMjI5LjYyIDMwNy44NCAyMzIuNzQgMzAxLjI3IDIzMi43NEwyMjcuNDggMjMyLjc0QzIyMC45MSAyMzIuNzQgMjE1Ljk1IDIyOS42MiAyMTUuOTUgMjI1LjkxTDIxNS45NSAxODQuMjNDMjE1Ljk1IDE4MC41MiAyMjAuOTEgMTc2LjQ5IDIyNy40OCAxNzYuNDlMMzAxLjI3IDE3Ni40OUMzMDcuODQgMTc2LjQ5IDMxMy44NiAxODAuNTIgMzEzLjg2IDE4NC4yM0wzMTMuODYgMjI1LjkxWk0xNzQuMjggMzA4Ljg0QzE3NC4yOCAzMTIuNTYgMTY5LjI2IDMxNi4wNyAxNjIuNyAzMTYuMDdMODkuMDQgMzE2LjA3QzgyLjQ3IDMxNi4wNyA3Ni4zNiAzMTIuNTYgNzYuMzYgMzA4Ljg0TDc2LjM2IDI2Ny4xN0M3Ni4zNiAyNjMuNDYgODIuNDcgMjU5LjgyIDg5LjA0IDI1OS44MkwxNjIuNyAyNTkuODJDMTY5LjI2IDI1OS44MiAxNzQuMjggMjYzLjQ2IDE3NC4yOCAyNjcuMTdMMTc0LjI4IDMwOC44NFpNMzEzLjg2IDMwOC44NEMzMTMuODYgMzEyLjU2IDMwNy44NCAzMTYuMDcgMzAxLjI3IDMxNi4wN0wyMjcuNDggMzE2LjA3QzIyMC45MSAzMTYuMDcgMjE1Ljk1IDMxMi41NiAyMTUuOTUgMzA4Ljg0TDIxNS45NSAyNjcuMTdDMjE1Ljk1IDI2My40NiAyMjAuOTEgMjU5LjgyIDIyNy40OCAyNTkuODJMMzAxLjI3IDI1OS44MkMzMDcuODQgMjU5LjgyIDMxMy44NiAyNjMuNDYgMzEzLjg2IDI2Ny4xN0wzMTMuODYgMzA4Ljg0WiIgLz4KCTwvZz4KPC9zdmc+" />
                                            </defs>
                                            <use style={{ filter: "url(#flt1)" }} href="#date_icon" transform="matrix(0.031,0,0,0.031,-0.029,0.236)" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="column end-date">
                                    <label>CHECK OUT</label>
                                    <SingleDatePicker
                                        date={this.state.endDate}
                                        onDateChange={endDate => { this.setState({ endDate }) }}
                                        focused={this.state.endFocusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) 
                                        onFocusChange={this.onEndDateFocusChange}
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                        displayFormat="MM/DD/YYYY"
                                        placeholder="End date"
                                        id="end_date"
                                    />
                                    <div className="date-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                            <defs>
                                                <filter id="flt1"> <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.847   0 0 0 0 0.847   0 0 0 0 0.847   0 0 0 1 0" /> </filter>
                                                <image width="550" height="550" id="date_icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODkgMzg5IiB3aWR0aD0iMzg5IiBoZWlnaHQ9IjM4OSI+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJCS5zaHAwIHsgZmlsbDogI2ZmZmZmZiB9IAoJPC9zdHlsZT4KCTxnIGlkPSJQYWdlIDEiPgoJCTxwYXRoIGlkPSJQYXRoIDEiIGNsYXNzPSJzaHAwIiBkPSJNMzg4Ljc2IDgzLjE3TDM4OC43NiAzMzcuMTZDMzg0LjY2IDM1Mi4zMSAzNzguNzUgMzY2Ljc2IDM2NS4xOSAzNzUuNjRDMzU2LjU1IDM4MS4yOSAzNDYuNCAzODQuNjIgMzM2LjkzIDM4OUw1MS44NCAzODlDMzYuNzEgMzg0Ljg3IDIyLjIzIDM3OS4wMSAxMy4zNiAzNjUuNDNDNy43MiAzNTYuNzkgNC4zNyAzNDYuNjQgMCAzMzcuMTZDMCAyNTIuNSAwIDE2Ny44NCAwIDgzLjE3QzAuNTEgODIuMTkgMS4yNSA4MS4yNyAxLjUxIDgwLjIyQzEwLjMyIDQ0LjcgNDMuMTUgMjQuNjUgODEuMDMgMzMuMTZDODEuMDMgNDcuMDkgODAgNjEuNTEgODEuMyA3NS43MkM4Mi44NSA5Mi42IDk3Ljg0IDEwNS4yNSAxMTQuODMgMTA1LjkxQzEyMi4zIDEwNi4yIDEzMC4xMiAxMDcuMzIgMTM3LjE4IDEwNS41OUMxNDUuNDggMTAzLjU2IDE1NC4wNyAxMDAuMSAxNjAuODMgOTUuMDFDMTcwLjEzIDg3Ljk5IDE3Mi4wMiA3Ni43NSAxNzEuOTcgNjUuNDJDMTcxLjkzIDU0LjM1IDE3MS45NiA0My4yOCAxNzEuOTYgMzIuMTFMMjI0LjY1IDMyLjExQzIyNC42NSA0NS4yIDIyNC40MiA1Ny44MSAyMjQuNyA3MC40MUMyMjUuMTIgODkuOTMgMjQwLjMgMTA1LjIyIDI1OS43NSAxMDUuOTZDMjY1LjIgMTA2LjE3IDI3MC42NyAxMDYuMDcgMjc2LjE0IDEwNi4wNEMzMDEuMzkgMTA1LjkyIDMxNi4wMiA5MS4xNyAzMTYuMTYgNjUuNjVDMzE2LjIyIDU0LjUzIDMxNi4xNyA0My40MSAzMTYuMTcgMzIuMDFDMzM1LjkgMzAuMzQgMzUyLjk0IDM0LjE3IDM2Ny42NyA0Ni42MUMzNzkuMTYgNTYuMyAzODQuNjQgNjkuMzEgMzg4Ljc2IDgzLjE3Wk0xOTMuOTggMzU5LjE1QzIzNi44NiAzNTkuMTUgMjc5LjczIDM1OS4yOCAzMjIuNjEgMzU5LjFDMzQ2LjA3IDM1OS4wMSAzNTguNjYgMzQ3LjMyIDM1OC44IDMyNC42M0MzNTkuMTMgMjY4LjgxIDM1OS4wMiAyMTIuOTggMzU4Ljg0IDE1Ny4xNkMzNTguNzkgMTQxLjQxIDM1MS42NiAxMzQuOCAzMzUuOTIgMTM0Ljc5QzI0MS41NCAxMzQuNzggMTQ3LjE1IDEzNC43OCA1Mi43NyAxMzQuOEMzNy4wNyAxMzQuOCAyOS45NyAxNDEuNDMgMjkuOTIgMTU3LjIzQzI5Ljc1IDIxMy4wNiAyOS44MSAyNjguODggMjkuOSAzMjQuNzFDMjkuOTIgMzM0LjQ3IDMyLjM4IDM0My40NyAzOS44NiAzNTAuNDlDNDcuNTkgMzU3Ljc0IDU3LjEgMzU5LjE1IDY3LjA4IDM1OS4xNUMxMDkuMzggMzU5LjE2IDE1MS42OCAzNTkuMTYgMTkzLjk4IDM1OS4xNVpNMTM5Ljk1IDAuMjRDMTQ5Ljk2IDQuOTYgMTUzLjc2IDEyLjgxIDE1My4zMSAyMy44M0MxNTIuNzIgMzguMTkgMTUzLjI1IDUyLjYgMTUzLjE0IDY2Ljk4QzE1My4wMyA4MC43OCAxNDYuMjkgODcuNDIgMTMyLjM5IDg3Ljg0QzEwOC43NiA4OC41NCA5Ni44OCA4OC4yMyA5OC43NSA1NS41NkM5OS4zNCA0NS4yNCA5OS4zNSAzNC44MiA5OC43IDI0LjVDOTcuOTggMTMuMTUgMTAxLjkxIDUuMDUgMTEyLjMxIDAuMjRMMTM5Ljk1IDAuMjRaTTI4My4zNiAwLjI0QzI5My43NCA0LjQxIDI5Ny45MiAxMS45IDI5Ny40MyAyMy4xOUMyOTYuNzcgMzguMTEgMjk3LjMzIDUzLjA5IDI5Ny4yNCA2OC4wNEMyOTcuMTcgODAuMDUgMjkwLjk0IDg2LjcyIDI3OS4wOSA4Ny43OEMyNzguOCA4Ny44IDI3OC41MSA4Ny44MSAyNzguMjMgODcuODFDMjU1LjY0IDg3LjkxIDI0MSA5MS4yOCAyNDMuMzUgNTUuMzlDMjQ0LjAyIDQ1LjA4IDI0NC4xMiAzNC42MyAyNDMuMjcgMjQuMzVDMjQyLjM0IDEzLjI5IDI0Ni4zMyA1LjU3IDI1NS43MiAwLjI0TDI4My4zNiAwLjI0Wk0xNzQuMjggMjI1LjkxQzE3NC4yOCAyMjkuNjIgMTY5LjI2IDIzMi43NCAxNjIuNyAyMzIuNzRMODkuMDQgMjMyLjc0QzgyLjQ3IDIzMi43NCA3Ni4zNiAyMjkuNjIgNzYuMzYgMjI1LjkxTDc2LjM2IDE4NC4yM0M3Ni4zNiAxODAuNTIgODIuNDcgMTc2LjQ5IDg5LjA0IDE3Ni40OUwxNjIuNyAxNzYuNDlDMTY5LjI2IDE3Ni40OSAxNzQuMjggMTgwLjUyIDE3NC4yOCAxODQuMjNMMTc0LjI4IDIyNS45MVpNMzEzLjg2IDIyNS45MUMzMTMuODYgMjI5LjYyIDMwNy44NCAyMzIuNzQgMzAxLjI3IDIzMi43NEwyMjcuNDggMjMyLjc0QzIyMC45MSAyMzIuNzQgMjE1Ljk1IDIyOS42MiAyMTUuOTUgMjI1LjkxTDIxNS45NSAxODQuMjNDMjE1Ljk1IDE4MC41MiAyMjAuOTEgMTc2LjQ5IDIyNy40OCAxNzYuNDlMMzAxLjI3IDE3Ni40OUMzMDcuODQgMTc2LjQ5IDMxMy44NiAxODAuNTIgMzEzLjg2IDE4NC4yM0wzMTMuODYgMjI1LjkxWk0xNzQuMjggMzA4Ljg0QzE3NC4yOCAzMTIuNTYgMTY5LjI2IDMxNi4wNyAxNjIuNyAzMTYuMDdMODkuMDQgMzE2LjA3QzgyLjQ3IDMxNi4wNyA3Ni4zNiAzMTIuNTYgNzYuMzYgMzA4Ljg0TDc2LjM2IDI2Ny4xN0M3Ni4zNiAyNjMuNDYgODIuNDcgMjU5LjgyIDg5LjA0IDI1OS44MkwxNjIuNyAyNTkuODJDMTY5LjI2IDI1OS44MiAxNzQuMjggMjYzLjQ2IDE3NC4yOCAyNjcuMTdMMTc0LjI4IDMwOC44NFpNMzEzLjg2IDMwOC44NEMzMTMuODYgMzEyLjU2IDMwNy44NCAzMTYuMDcgMzAxLjI3IDMxNi4wN0wyMjcuNDggMzE2LjA3QzIyMC45MSAzMTYuMDcgMjE1Ljk1IDMxMi41NiAyMTUuOTUgMzA4Ljg0TDIxNS45NSAyNjcuMTdDMjE1Ljk1IDI2My40NiAyMjAuOTEgMjU5LjgyIDIyNy40OCAyNTkuODJMMzAxLjI3IDI1OS44MkMzMDcuODQgMjU5LjgyIDMxMy44NiAyNjMuNDYgMzEzLjg2IDI2Ny4xN0wzMTMuODYgMzA4Ljg0WiIgLz4KCTwvZz4KPC9zdmc+" />
                                            </defs>
                                            <use style={{ filter: "url(#flt1)" }} href="#date_icon" transform="matrix(0.031,0,0,0.031,-0.029,0.236)" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="row message">
                                <label>MESSAGE *</label>
                                <div className="input-content">
                                    <textarea type="text" placeholder="Type your message here"></textarea>
                                </div>
                            </div>
                            <div className="row submit">
                                <button>SUBMIT</button>
                            </div>
                        </div>
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

export default ContactUs;
