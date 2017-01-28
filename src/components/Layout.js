import React, { Component } from 'react';

export default class Layout extends Component {
    render () {
        const { greeting, profile } = this.props;
        return (
            <div>
                <h1 className="greeting">{greeting}</h1>
                <ul className="profile">{ this._renderProfile(profile) }</ul>
            </div>
        )
    }

    _renderProfile () {
        return <li>"Code Blackwell is your guy!"</li>
    }
}
