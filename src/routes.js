import React from 'react'
import { Route } from 'react-router'

import App from './containers/homepage'

export default (
    <Route path='/' component={ App }>
        {/*<Route path='hello' component={ ... } />*/}
        {/*<Route path='goodbye' component={ ... } />*/}
    </Route>
)
