import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout'
import { KEY as HOMEPAGE_KEY } from '../constants/homepage_constants'
import { fetchProfile } from '../actions/homepage_actions';

class Homepage extends Component {
    render () {
        const { profile, greeting, dispatch } = this.props;
        return (
            <div className="homepage">
                <Layout
                    profile={ profile }
                    greeting={ greeting }
                />
                <button
                    onClick={ function(){ return dispatch(fetchProfile()) } }
                >Click to display my details!</button>
            </div>
        );
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

export default connect(mapStateToProps)(Homepage);
