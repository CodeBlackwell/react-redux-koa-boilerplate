import React, { Component } from 'react';

import Profile from '../components/Profile';

export default class Layout extends Component {
    render () {
        const { greeting, profile } = this.props;
        return (
            <div>
                <h1 className="greeting">{greeting}</h1>
                <Profile
                    profile={ profile }
                />
            </div>
        )
    }
}
