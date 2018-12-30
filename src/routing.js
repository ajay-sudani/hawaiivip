import React, { Component } from 'react';
import Aux from './hoc/Aux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';

class AppRouting extends Component {
    render() {
        return (
            <BrowserRouter>
                <Aux>
                    <Route path="/home" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path="/" render={() => (
                        <Redirect to="/home" />
                    )} />
                </Aux>
            </BrowserRouter>
        );
    }
}

export default AppRouting;
