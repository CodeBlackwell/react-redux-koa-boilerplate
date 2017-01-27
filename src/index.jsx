import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise'

import Root from './root'
import rootReducer from '../reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxPromise)
))
const history = browserHistory

render(
    <Root store={store} history={history}/>,
    document.getElementById('app')
)
