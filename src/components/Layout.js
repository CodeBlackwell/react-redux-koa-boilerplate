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
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Hometown</th>
                        <th>Favorite Fancy Quote</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{ name }</td>
                        <td>{ number }</td>
                        <td>{ hometown }</td>
                        <td>{ favoriteFancyQuote }</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}
