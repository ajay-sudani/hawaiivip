import React, { Component } from 'react';
import Aux from './hoc/Aux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
const url = process.env.NODE_ENV === 'production' ? '/hawaiivip' : '';

class AppRouting extends Component {
    render() {
        return (
            <BrowserRouter>
                <Aux>
                    <Route path={url + '/home'} component={Home} />
                    <Route path={url + '/dashboard'} component={Dashboard} />
                    <Route exact path={url + '/'} render={() => (
                        <Redirect to={url + '/home'} />
                    )} />
                </Aux>
            </BrowserRouter>
        );
    }
}

export default AppRouting;
