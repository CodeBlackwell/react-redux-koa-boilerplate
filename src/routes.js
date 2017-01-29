import React, { Component } from 'react'
import { Router, Route } from 'react-router';
import App from './containers/homepage'

export default (history) => {
    return (
        <Router history={ history }>
            <Route path="/" component={ App }>
            {/*<Route path='hello' component={ ... } />*/}

            {/*<Route path='goodbye' component={ ... } />*/}
            </Route>
        </Router>
    )
}
