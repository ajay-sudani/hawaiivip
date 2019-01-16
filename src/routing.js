import React, { Component } from 'react';
import Aux from './hoc/Aux';
import { Route, Redirect, HashRouter } from 'react-router-dom'
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import AboutUs from './components/about-us/about-us';
const url = process.env.NODE_ENV === 'production' ? '' : '';

class AppRouting extends Component {
    render() {
        return (
            <HashRouter>
                <Aux>
                    <Route path={url + '/home'} component={Home} />
                    <Route path={url + '/dashboard'} component={Dashboard} />
                    <Route path={url + '/about-us'} component={AboutUs} />
                    <Route exact path={url + '/'} render={() => (
                        <Redirect to={url + '/home'} />
                    )} />
                </Aux>
            </HashRouter>
        );
    }
}

export default AppRouting;
