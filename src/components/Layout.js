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

    _renderProfile (profile) {
        if ( profile != null ) {
            return "Code Blackwell is your guy!"
        }
        let index = 0;
        return Object.keys(profile).map( property => {
            return (
                <li
                    key={ index }
                    className="profile-property">
                    { profile[property] }
                </li>
            )
        })
    }
}
