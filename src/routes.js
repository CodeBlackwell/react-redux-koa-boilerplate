import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import App from './containers/homepage'
import Profile from './containers/Profile'

export default (history) => {
    return (
        <Router history={ history }>
            <Route path="/" component={ App }>
                <Route path='profile' component={ Profile } />
            </Route>
        </Router>
    )
}
