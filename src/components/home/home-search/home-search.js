import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './home-search.scss';
import { DateRangePicker } from 'react-dates';

class HomeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { startDate: null, endDate: null };
    }

    handleInputChange(event) {
        this.setState({
            dateValue: event.target.value
        })
    }

    render() {
        const smallDevice = window.matchMedia('(max-width: 1024px)').matches;
        const orientation = smallDevice ? 'vertical' : 'horizontal';
        return (
            <Aux>
                <div className="app-home-search">
                    <p className="text">EXPLORE VIP HAWAIIAN LOCATIONS</p>
                    <div className="content">
                        <div className="column areas">
                            <select>
                                <option value="1">Area 1</option>
                                <option value="2">Area 2</option>
                                <option value="3">Area 3</option>
                            </select>
                            <div className="down-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 9" width="17" height="9">
                                    <path d="M7.76,7.74l0.71,-0.71l-6.99,-6.99l-0.71,0.71zM16.46,0.75l-0.71,-0.71l-7.99,7.99l0.71,0.71z" />
                                </svg>
                            </div>
                        </div>
                        <div className="column date">
                            <DateRangePicker
                                orientation={orientation}
                                withPortal={smallDevice}
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="dashboard_start_date" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="dashboard_end_date" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
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
                        <div className="column guest">
                            <select>
                                <option value="1">Guest 1</option>
                                <option value="2">Guest 2</option>
                                <option value="3">Guest 3</option>
                            </select>
                            <div className="down-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 9" width="17" height="9">
                                    <path d="M7.76,7.74l0.71,-0.71l-6.99,-6.99l-0.71,0.71zM16.46,0.75l-0.71,-0.71l-7.99,7.99l0.71,0.71z" />
                                </svg>
                            </div>
                        </div>
                        <div className="column search">
                            <button>SEARCH</button>
                        </div>
                    </div>
                </div>
            </Aux >
        )
    };
}

export default HomeSearch;