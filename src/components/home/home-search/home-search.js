import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './home-search.scss';

class HomeSearch extends Component {
    render() {
        return (
            <Aux>
                <div className="app-home-search">
                    <p className="text">EXPLORE vip Hawaiian lOCATIONS</p>
                    <div className="content">
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
                        <div className="column guest">
                            <select>
                                <option value="1">Guest 1</option>
                                <option value="2">Guest 2</option>
                                <option value="3">Guest 3</option>
                            </select>
                        </div>
                        <div className="column search">
                            <button>SEARCH</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    };
}

export default HomeSearch;