import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import AppProvider from './contexts/AppContext';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

export default class Application extends Component {
    render() {
        return (
            <AppProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} exact />
                        <Route path="/login" component={Login} exact />
                    </Switch>
                </BrowserRouter>
            </AppProvider>
       );
    }
}

if (document.getElementById('application')) {
    ReactDOM.render(<Application />, document.getElementById('application'));
}
