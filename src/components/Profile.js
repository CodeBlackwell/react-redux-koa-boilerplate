import React, { Component } from 'react';

export default class Profile extends Component {

    render() {
        const { profile } = this.props;

        if (profile == null) {
            return (<h1>LeChristopher Blackwell is your guy!!</h1>)
        }
        //@formatter:off
        const {
            email,
            favoriteFancyQuote,
            hometown,
            name,
            number,
        } = profile;
        //@formatter:on
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Hometown</th>
                        <th>Favorite Fancy Quote</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{ name }</td>
                        <td>{ number }</td>
                        <td>{ email }</td>
                        <td>{ hometown }</td>
                        <td>{ favoriteFancyQuote }</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}
