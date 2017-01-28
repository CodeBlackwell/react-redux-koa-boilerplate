import React, { Component } from 'react';

export default class Layout extends Component {
    render () {
        const { greeting, profile } = this.props;
        return (
            <div>
                <h1 className="greeting">{greeting}</h1>
                <div className="profile">{ this._renderProfile(profile) }</div>
            </div>
        )
    }

    _renderProfile (profile) {
        //@formatter:off
        const {
            name,
            number,
            hometown,
            favoriteFancyQuote,
        } = profile;
        //@formatter:on
        return (
            <ul>
                <li className="profile-property">Name: { name }</li>
                <li className="profile-property">Number: { number }</li>
                <li className="profile-property">Hometown: { hometown }</li>
                <li className="profile-property">Favorite Fancy Quote: { favoriteFancyQuote }</li>
            </ul>
        )
    }

}
