import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KEY as HOMEPAGE_KEY } from '../constants/homepage_constants';
import { fetchProfile } from '../actions/homepage_actions';

class Profile extends Component {

    render () {
        const { greeting, profile } = this.props;
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

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(fetchProfile())
    }

}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [HOMEPAGE_KEY]: {
            greeting,
            profile
        }
    } = state;
    //@formatter:on
    return {
        greeting,
        profile
    };
};

export default connect(mapStateToProps)(Profile);
