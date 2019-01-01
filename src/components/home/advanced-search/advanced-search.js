import React, { Component } from 'react';
import './advanced-search.scss';

class AdvancedSearch extends Component {
    render() {
        return (
            <div className="home-advanced-search">
                <div className="column left">
                    <p className="text">What can we help you find, Amanda?</p>
                    <div className="s-card">
                        <div className="image">
                            <img alt="no data found" src={require("../../../assets/images/activity_2.png")}></img>
                        </div>
                        <div className="info">
                            <span>ACCOMMODATIONS</span>
                        </div>
                    </div>
                    <div className="s-card">
                        <div className="image">
                            <img alt="no data found" src={require("../../../assets/images/vip_3.png")}></img>
                        </div>
                        <div className="info">
                            <span>ACTIVITIES</span>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <p className="text">Continue your search</p>
                    <div className="date-card big-ieland">
                        <p>BIG IELAND</p>
                        <span>feb 04 - Feb 08</span>
                        <div className="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 24" width="14" height="24">
                                <path id="Shape 1 copy 2" d="M11.64,13.12l-1.01,-1.02l-10.03,10.07l1.01,1.02zM1.61,0.6l-1.01,1.02l11.46,11.51l1.01,-1.02z" />
                            </svg>
                        </div>
                    </div>
                    <div className="date-card">
                        <p>MOLOKAI</p>
                        <span>feb 11 - Feb 16</span>
                        <div className="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 24" width="14" height="24">
                                <path id="Shape 1 copy 2" d="M11.64,13.12l-1.01,-1.02l-10.03,10.07l1.01,1.02zM1.61,0.6l-1.01,1.02l11.46,11.51l1.01,-1.02z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default AdvancedSearch;