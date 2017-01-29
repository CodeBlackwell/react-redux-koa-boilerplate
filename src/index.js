import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import ReduxPromise from 'redux-promise'

import Root from './root'
import rootReducer from './reducers/root_reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxPromise)
));

const history = syncHistoryWithStore(browserHistory, store);

const theRoot = () => (<Root store={ store } history={ history }/>);

export default theRoot
